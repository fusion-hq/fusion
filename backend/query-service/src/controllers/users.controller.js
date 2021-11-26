const { Pool } = require("pg");
require("dotenv").config();
var moment = require("moment");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

// Return unique user properties in ascending order - used by property filter menu
const getAllUserProperties = async (req, res) => {
  const { writeKey } = await req.query;
  const response = await pool.query(
    `SELECT DISTINCT json_object_keys (properties) AS properties FROM fusion_user_${writeKey} WHERE write_key = $1 ORDER BY properties ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Returns a specific user property's possible value eg: plan = free, phone = 12345669833
const getUserPropertyValues = async (req, res) => {
  const { propertyName, writeKey } = await req.query;
  if (propertyName !== "") {
    const response = await pool.query(
      `SELECT DISTINCT properties ->> '${propertyName}' as ${propertyName} FROM fusion_user_${writeKey} WHERE write_key = $1 AND properties ->> '${propertyName}' IS NOT NULL ORDER BY ${propertyName} ASC`,
      [writeKey]
    );
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};

// Return all unique users
const getAllUsers = async (req, res) => {
  // destructure the received query params
  /**
    host,
    os,
    browser,
    browserVersion,
    deviceType,
    screenHeight,
    screenWidth,
    country,
    city,
    referrerDomain,
    referrer,
    ip,
    lib,
    libVersion,
   */
  const { filters, dateTime, startDate, endDate, writeKey, limit, page } = await req.query;
  //console.log(req.query);

  const [startDateTime, endDateTime] = await calculateDateTime(
    dateTime,
    startDate,
    endDate
  );

  //TODO: add validation for filters as well

  var filterList = JSON.parse(filters);
  //TODO: covert "equal" operator to "="

  // var formattedFilterList = filterList.map((filterList) => {
  //   if (filterList.Operator === "is not") {
  //     filterList.Operator = "!=";
  //   } else {
  //     filterList.Operator = "=";
  //   }
  // });

  var whereClause = ``;

  filterList.map((filter) => {
    if (filter.Operator == "is equal") {
      whereClause += `AND properties ->> '${filter.Property}' = '${filter.Value}'`;
    } else if (filter.Operator == "is not equal") {
      whereClause += `AND properties ->> '${filter.Property}' != '${filter.Value}'`;
    } else if (filter.Operator == "contain") {
      whereClause += `AND properties ->> '${filter.Property}' LIKE '%${filter.Value}%'`;
    } else if (filter.Operator == "not contain") {
      whereClause += `AND properties ->> '${filter.Property}' NOT LIKE '%${filter.Value}%'`;
    }
  });

  var queryStatement = `SELECT properties->>'email' AS email, properties->>'user_id' AS user_id, properties->>'device_id' AS device_id, uuid, id, properties, created_at FROM fusion_user_${writeKey} WHERE write_key=$1 ${whereClause} AND created_at between $2 AND $3 ORDER BY created_at DESC OFFSET ${(page - 1) * limit} LIMIT ${limit};`;
  var sqlParams = [writeKey, startDateTime, endDateTime];

  if (validateQueryParameters(dateTime, startDateTime, endDateTime)) {
    const response = await pool.query(queryStatement, sqlParams);
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};

// Return all unique users
const getUserPerformedEvents = async (req, res) => {
  try {
    const { event, userIds, filters, dateTime, startDate, endDate, writeKey } =
      await req.query;
    //console.log(req.query);

    const [startDateTime, endDateTime] = await calculateDateTime(
      dateTime,
      startDate,
      endDate
    );

    //TODO: add validation for filters as well

    var propertyFilterList = JSON.parse(filters);
    var userIdList = JSON.parse(userIds);

    //TODO: covert "equal" operator to "="

    var propertyFilterClause = ``;
    var userIdListClause = ``;

    propertyFilterList.map((filter) => {
      if (filter.Operator == "is equal") {
        propertyFilterClause += `AND properties ->> '${filter.Property}' = '${filter.Value}'`;
      } else if (filter.Operator == "is not equal") {
        propertyFilterClause += `AND properties ->> '${filter.Property}' != '${filter.Value}'`;
      } else if (filter.Operator == "contain") {
        propertyFilterClause += `AND properties ->> '${filter.Property}' LIKE '%${filter.Value}%'`;
      } else if (filter.Operator == "not contain") {
        propertyFilterClause += `AND properties ->> '${filter.Property}' NOT LIKE '%${filter.Value}%'`;
      }
    });

    // Map and create a where clause with all user_ids of a user eg: array [1234, 5678] return string "AND properties ->> 'user_id' = 1234 AND properties ->> 'user_id' = 5678"
    userIdList.map((userId) => {
      userIdListClause += `AND properties ->> 'user_id' = '${userId}'`;
    });

    var queryStatementWithoutEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'page' AS page, properties ->> 'website' AS source, timestamp FROM fusion_event_${writeKey} WHERE write_key = $1 ${propertyFilterClause} ${userIdListClause} AND timestamp BETWEEN $2 AND $3 ORDER BY timestamp DESC`;
    var sqlParamsWithoutEventFilter = [writeKey, startDateTime, endDateTime];
    var queryStatementWithEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'page' AS page, properties ->> 'website' AS source, timestamp FROM fusion_event_${writeKey} WHERE write_key = $1 AND event = $2 ${propertyFilterClause} ${userIdListClause} AND timestamp BETWEEN $3 AND $4 ORDER BY timestamp DESC`;
    var sqlParamsWithEventFilter = [
      writeKey,
      event,
      startDateTime,
      endDateTime,
    ];

    finalQueryStatement = queryStatementWithEventFilter;
    finalQueryParams = sqlParamsWithEventFilter;

    if (event === "All events") {
      finalQueryStatement = queryStatementWithoutEventFilter;
      finalQueryParams = sqlParamsWithoutEventFilter;
    }

    if (validateQueryParameters(dateTime, startDateTime, endDateTime)) {
      const response = await pool.query(finalQueryStatement, finalQueryParams);
      res.status(200).json(response.rows);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Return all the personal data(property & value) of a specific user - used on User Page
const getUserPersonalData = async (req, res) => {
  const { uuid, userId, deviceId, writeKey } = await req.query;
  //console.log(req.query);

  var queryStatement = `SELECT properties ->>'name' AS name,
  properties ->>'email' AS email,
  properties ->>'phone' AS phone,
  properties ->>'company' AS company,
  properties ->>'plan' AS plan,
  properties ->>'team' AS team,
  uuid,
  user_ids,
  created_at,
  properties
  FROM fusion_user_${writeKey}
  WHERE uuid =$1
  AND properties ->>'user_id' = $2
  AND properties ->>'device_id' = $3
  AND write_key=$4`;
  var sqlParams = [uuid, userId, deviceId, writeKey];

  const response = await pool.query(queryStatement, sqlParams);

  // If value of any key is null, the remove null and place "-"
  const userProfileData = response.rows[0];
  for (const item in userProfileData) {
    if (userProfileData[item] === null) {
      userProfileData[item] = " ";
    }
  }
  res.status(200).json(response.rows[0]);
};

// validates query paramters of incoming request to avoid breaking the system
function validateQueryParameters(dateTime, startDateTime, endDateTime) {
  if (
    dateTime == "Today" ||
    dateTime == "Yesterday" ||
    dateTime == "Last 24 hours" ||
    dateTime == "Last 48 hours" ||
    dateTime == "Last 7 days" ||
    dateTime == "Last 30 days" ||
    dateTime == "Last 90 days" ||
    dateTime == "All time" ||
    dateTime == "Date range"
  ) {
    if (dateTime == "Date range") {
      // check is startDate and endDate are valid
      let state =
        moment(startDateTime, "YYYY-MM-DD HH:mm:ss", true).isValid() &&
        moment(endDateTime, "YYYY-MM-DD HH:mm:ss", true).isValid();
      //console.log(state);
      return state;
    } else return true;
  } else return false;
}

// Calculates SQL compatible datetime from api datatime query param
function calculateDateTime(dateTime, startDate, endDate) {
  switch (dateTime) {
    case "Today":
      todaysDateOnly = new Date().toISOString().split("T")[0];
      startDateTime = `${todaysDateOnly} 00:00:00`;
      endDateTime = `${todaysDateOnly} 23:59:59`;
      break;

    case "Yesterday":
      yesterdaysDateTime = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
      yesterdaysDateOnly = yesterdaysDateTime.toISOString().split("T")[0];
      startDateTime = `${yesterdaysDateOnly} 00:00:00`;
      endDateTime = `${yesterdaysDateOnly} 23:59:59`;
      break;

    case "Last 24 hours":
      startDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      last24thHourDateTime = new Date(
        new Date().getTime() - 24 * 60 * 60 * 1000
      );
      endDateTime = last24thHourDateTime
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      break;

    case "Last 48 hours":
      startDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      last48thHourDateTime = new Date(
        new Date().getTime() - 48 * 60 * 60 * 1000
      );
      endDateTime = last48thHourDateTime
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      break;

    case "Last 7 days":
      startDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      last7thDayDateTime = new Date(
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
      );
      last7thDayDateOnly = last7thDayDateTime.toISOString().split("T")[0];
      endDateTime = `${last7thDayDateOnly} 00:00:00`;
      break;

    case "Last 30 days":
      endDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      last7thDayDateTime = new Date(
        new Date().getTime() - 30 * 24 * 60 * 60 * 1000
      );
      startDateTime = last7thDayDateTime
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      break;

    case "Last 90 days":
      endDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      last7thDayDateTime = new Date(
        new Date().getTime() - 90 * 24 * 60 * 60 * 1000
      );
      startDateTime = last7thDayDateTime
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");
      break;

    case "All time":
      startDateTime = "01-01-1970 00:00:00";
      endDateTime = new Date()
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, ""); // delete the dot and everything after
      break;

    case "Date range":
      startDateTime = `${startDate} 00:00:00`;
      endDateTime = `${endDate} 23:59:59`;
      break;

    default:
      //by default Today
      todaysDateOnly = new Date().toISOString().split("T")[0];
      startDateTime = `${todaysDateOnly} 00:00:00`;
      endDateTime = `${todaysDateOnly} 23:59:59`;
      break;
  }
  return [startDateTime, endDateTime];
}

module.exports = {
  getAllUsers,
  getAllUserProperties,
  getUserPropertyValues,
  getUserPersonalData,
  getUserPerformedEvents,
};
