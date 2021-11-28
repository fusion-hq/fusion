/**
 *  TODO
 *  1) Adapt queries, tables & DB to tracker v3
 *  2) Save data in mulitple tables and add relations
 */

const Pool = require("pg").Pool;
require("dotenv").config();
const moment = require("moment");
const axios = require("axios");
const { v4 } = require("uuid");
require("dotenv").config();

// Connect to the postgres DB
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

// Convert UNIX timestamp to Date Time
function timestampToDateTime(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1);
  var year = a.getFullYear();
  // check why +1 is required
  var month = a.getMonth() + 1;
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var dateTime =
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  //console.log(dateTime);
  return dateTime;
}

// Save incoming tracking data into TrackData table
const autherizeWebsite = async (host, writeKey) => {
  const response = await pool.query(
    `SELECT DISTINCT website_name FROM AllowedWebsites_${writeKey} WHERE website_name=$1 AND write_key=$2`,
    [host, writeKey]
  );
  //console.log(response.rows);
  return response.rows;
};

const ipLookUp = async (ip) => {
  if(ip!==null || ip!==undefined) {
    const locationData = axios
    .get(`https://ipinfo.io/${ip}?token=${process.env.IP_INFO_API_TOKEN}`)
    .then((response) => {
      let fetchedData = response.data;
      return fetchedData;
    })
    .catch((error) => {
      console.log(error);
    });
    return locationData;
  }
};

// check and return location data from db for a specific user
const checkLocationHistory = async (user_id, device_id, write_key) => {
  const storedLocationData = await pool.query(
    `SELECT DISTINCT properties ->> 'city' as city, properties ->> 'region' as region, properties ->> 'country' as country, timestamp FROM fusion_event_${write_key} WHERE write_key= $1 AND properties ->> 'user_id' = $2 AND properties ->> 'device_id' = $3 AND properties ->> 'city' IS NOT NULL AND properties ->> 'country' IS NOT NULL ORDER BY city, region, country, timestamp DESC limit 1`,
    [write_key, user_id, device_id]
  );
  return storedLocationData.rows;
};

// Adding Geo-Location data to user's properties
const addGeoDataToUserPropeties = async (
  parsedEventProperties,
  user_id,
  device_id,
  user_ip,
  writeKey
) => {
  const historicaLocationData = await checkLocationHistory(
    user_id,
    device_id,
    writeKey
  );

  let properties;

  //check if historicaLocationData is empty
  if (
    typeof historicaLocationData !== "undefined" &&
    historicaLocationData.length > 0
  ) {
    console.log("location data present");
    //location info into properties payload
    parsedEventProperties.city = `${historicaLocationData[0].city}`;
    parsedEventProperties.region = `${historicaLocationData[0].region}`;
    parsedEventProperties.country = `${historicaLocationData[0].country}`;

    //set properties to new properties with location data
    properties = JSON.stringify(parsedEventProperties);
  }
  //if pre ip data not saved for specific user, check for ip and if available fetch & save location data
  else if (user_ip !== "") {
    //fetch location data from ip_lookup service
    const newLocationData = await ipLookUp(user_ip);
    //location info into properties payload
    parsedEventProperties.city = `${newLocationData.city}`;
    parsedEventProperties.region = `${newLocationData.region}`;
    parsedEventProperties.country = `${newLocationData.country}`;

    //set properties to new properties with location data
    properties = JSON.stringify(parsedEventProperties);
  }
  return properties;
};

// Save incoming tracking data into TrackData table
const saveEventData = async (data) => {
  let event = data.event,
    properties = data.properties,
    writeKey = data.apiKey,
    timestamp = data.timestamp;

  // get domain name of website sending event
  let parsedEventProperties = await JSON.parse(data.properties);
  let host = parsedEventProperties.website,
    user_ip = parsedEventProperties.ip,
    user_id = parsedEventProperties.user_id,
    device_id = parsedEventProperties.device_id;

  var allowedWebsites = await autherizeWebsite(host, writeKey);
  if (typeof allowedWebsites !== "undefined" && allowedWebsites.length > 0) {
    console.log("autherized");

    LocalDatetime = timestampToDateTime(timestamp);
    dateTimeUTC = moment(new Date(LocalDatetime)).utc().format();

    if(user_ip) {
      properties = await addGeoDataToUserPropeties(
        parsedEventProperties,
        user_id,
        device_id,
        user_ip,
        writeKey
      );
    }        
    //Insert user data into db (event table)
    pool.query(
      `INSERT INTO fusion_event_${writeKey} (event, properties, write_key, timestamp) VALUES ($1, $2, $3, $4)`,
      [event, properties, writeKey, dateTimeUTC],
      (error) => {
        if (error) {
          throw error;
        }
        console.log("Data saved in DB !");
      }
    );

    // save user data in db(user table)
    await saveNewUser(user_id, device_id, properties, dateTimeUTC, writeKey);
  }
  else {
    console.log("Not autherized");
  }
};

const saveRecording = async (
  recording,
  sessionId,
  time
) => {
  recording = JSON.parse(recording);

  if(time === 0) {
    try {
      await pool.query(
        `UPDATE SESSION_RECORDING SET recording= array_cat(recording, $1) where sessionid='${sessionId}'`,
        [recording]
      )
    } catch (ex) {
      console.log(ex);
    }
  } else {
    try {
      await pool.query(
        `UPDATE SESSION_RECORDING SET recording= array_append(recording, $1) where sessionid='${sessionId}'`,
        [recording]
      )
    } catch (ex) {
      console.log(ex);
    }
  }
}

//create new session
const createNewRecordingInstance = async (query) => {

  let host = JSON.parse(query.properties).website
  let allowedWebsites = await autherizeWebsite(host, query.write_key);

  if (typeof allowedWebsites !== "undefined" && allowedWebsites.length > 0) {
    LocalDatetime = timestampToDateTime(query.created_at);
    dateTimeUTC = moment(new Date(LocalDatetime)).utc().format();
    //Insert data into db
    await pool.query(
      `INSERT INTO SESSION_RECORDING VALUES ($1, '{}', $2, $3, $4)`,
      [query.sessionId, JSON.parse(query.properties), query.write_key, dateTimeUTC]
    );
  }
};

//check if user exists else add new user data
const saveNewUser = async (
  user_id,
  device_id,
  properties,
  created_at,
  write_key
) => {
  let uuid = v4(),
    is_identified = "false",
    user_ids = `{"${user_id}"}`;

  if(user_ids!==null || user_ids!==undefined) {
    pool.query(
      `INSERT INTO fusion_user_${write_key} (uuid, properties, user_ids, is_identified, created_at, write_key) SELECT '${uuid}', '${properties}', '${user_ids}', '${is_identified}', '${created_at}', '${write_key}' WHERE NOT EXISTS (SELECT * FROM fusion_user_${write_key} WHERE '${user_id}' = ANY(user_ids) AND properties ->>'device_id' = '${device_id}' AND properties ->>'user_id' = '${user_id}' AND write_key = '${write_key}')`,
      (error) => {
        if (error) {
          console.log('error', error);
        }
        console.log("user saved !");
      }
    );
  }
};

//check if user exists else add new user data (used by fusion.identify() js library)
const identifyUser = async (userData) => {
  console.log(userData);

  let uuid = userData.uuid,
    properties = userData.properties,
    writeKey = userData.apiKey;

  var parsedUserProperties = await JSON.parse(userData.properties);

  let user_ip = parsedUserProperties.ip,
    user_id = parsedUserProperties.user_id,
    device_id = parsedUserProperties.device_id;

  //Insert data into db
  const prevDataForThisUUID = await pool.query(
    `SELECT properties, user_ids, created_at FROM fusion_user_${writeKey} WHERE uuid= $1 AND $2 != ANY(user_ids) AND write_key= $3 ORDER BY created_at DESC`,
    [uuid, user_id, writeKey]
  );

  if (prevDataForThisUUID.rows.length !== 0) {
    console.log("user data exists for this uuid");
    // here use previously available properties and merge all userIds into one array
    //Get previously saved user info with the same uuid
    const prevDataAsIdentifiedUser = await pool.query(
      `SELECT uuid, properties, user_ids, created_at FROM fusion_user_${writeKey} WHERE uuid=$1 AND write_key= $2 ORDER BY created_at DESC limit 1`,
      [uuid, writeKey]
    );
    console.log(prevDataAsIdentifiedUser.rows[0]);

    let prevIdentifiedUserProperties =
        prevDataAsIdentifiedUser.rows[0].properties,
      prevIdentifiedUserIds = prevDataAsIdentifiedUser.rows[0].user_ids,
      // need to format date-time before inserting again
      prevIdentifiedUserCreatedAt = moment(
        prevDataAsIdentifiedUser.rows[0].created_at
      ).format("YYYY-MM-DD HH:mm:ss"),
      isIdentified = "true";

    // appen new user_id to user_ids array
    prevIdentifiedUserIds = [...prevIdentifiedUserIds, user_id];

    // merge new properties to current current properties without over writing previous property values
    for (const property in properties) {
      //check if user defined property was aleady set if yes dont overwrite
      if (
        Object.values(prevIdentifiedUserProperties).indexOf(
          prevIdentifiedUserProperties[property] > -1
        )
      )
        prevIdentifiedUserProperties[property] = `${properties[property]}`;
    }

    console.log(prevIdentifiedUserIds);
    console.log(properties);
  } else {
    console.log("user data does not exist for this uuid..creating one");
    // creetae a all new entry
    //look for anonymously added userData with this user_id and device_id
    const prevDataAsAnonymousUser = await pool.query(
      `SELECT uuid, properties, user_ids, created_at FROM fusion_user_${writeKey} WHERE properties ->> 'user_id' = $1 AND properties ->> 'device_id' = $2 AND write_key= $3 ORDER BY created_at DESC limit 1`,
      [user_id, device_id, writeKey]
    );

    console.log(prevDataAsAnonymousUser.rows[0]);

    let previousProperties = await JSON.stringify(
        prevDataAsAnonymousUser.rows[0].properties
      ),
      previousUserIds = `{"${prevDataAsAnonymousUser.rows[0].user_ids[0]}"}`,
      // need to format date-time before inserting again
      previousCreatedAt = moment(
        prevDataAsAnonymousUser.rows[0].created_at
      ).format("YYYY-MM-DD HH:mm:ss"),
      isIdentified = "true";

    // merge new properties to current current properties without over writing previous property values
    // for (const property in properties) {
    //   previousProperties[property] = `${properties[property]}`;
    // }

    // previousProperties = JSON.stringify(previousProperties);

    //Insert data into db with user defined UUID
    await pool.query(
      `INSERT INTO fusion_user_${writeKey} (uuid, properties, user_ids, is_identified, created_at, write_key) VALUES ('${uuid}', '${previousProperties}', '${previousUserIds}', '${isIdentified}', '${previousCreatedAt}', '${writeKey}')`
    ),
      (error) => {
        if (error) {
          throw error;
        }
        console.log("user saved !");
      };

    // delete anonymous user data
    await pool.query(`DELETE FROM fusion_user_${writeKey} WHERE uuid=$1 AND write_key=$2`, [
      uuid,
      writeKey,
    ]),
      (error) => {
        if (error) {
          throw error;
        }
        console.log("user saved !");
      };
  }
};

module.exports = {
  saveEventData,
  autherizeWebsite,
  identifyUser,
  saveRecording,
  createNewRecordingInstance
};
