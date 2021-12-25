const { Pool } = require("pg");
require("dotenv").config();
var moment = require('moment');

let db_object = {
  user: process.env.POSTGRES_USER || process.env.DB_USER_HOSTED,
  host: process.env.POSTGRES_HOST || process.env.DB_HOST_HOSTED,
  database: process.env.POSTGRES_DB || process.env.DB_HOSTED,
  password: process.env.POSTGRES_PASSWORD || process.env.DB_PASSWORD_HOSTED,
  port: process.env.POSTGRES_PORT || process.env.DB_PORT_HOSTED
}

if(process.env.NODE_ENV === 'PRODUCTION') {
  db_object.ssl =  { rejectUnauthorized: false }
}

const pool = new Pool(db_object);

//Return all unique event name in ascending order
const getAllEventsName = async (req, res) => {
  var { writeKey } = await req.query;
  const response = await pool.query(
    `SELECT DISTINCT event FROM fusion_event_${writeKey} WHERE write_key = $1 ORDER BY event ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Return laest event entries(with properties) from the table in descednding order
const getAllEventData = async (req, res) => {
  const { event, filters, dateTime, startDate, endDate, page, limit, writeKey } =
    await req.query;
  //console.log(req.query);

  const [startDateTime, endDateTime] = await calculateDateTime(
    dateTime,
    startDate,
    endDate
  );

  //TODO: add validation for filters as well

  var filterList = JSON.parse(filters);
  //TODO: covert "equal" operator to "="

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

  var queryStatementWithoutEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'website' AS source, timestamp FROM fusion_event_${writeKey} WHERE write_key = $1 ${whereClause} AND timestamp BETWEEN $2 AND $3 ORDER BY timestamp DESC OFFSET ${(page - 1) * limit} LIMIT ${limit}`;
  var sqlParamsWithoutEventFilter = [writeKey, startDateTime, endDateTime];
  var queryStatementWithEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'website' AS source, timestamp FROM fusion_event_${writeKey} WHERE write_key = $1 AND event = $2 ${whereClause} AND timestamp BETWEEN $3 AND $4 ORDER BY timestamp DESC OFFSET ${(page - 1) * limit} LIMIT ${limit}`;
  var sqlParamsWithEventFilter = [writeKey, event, startDateTime, endDateTime];

  var finalQueryStatement = queryStatementWithEventFilter;
  var finalQueryParams = sqlParamsWithEventFilter;

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

// Return latest unique event properties in ascending order - used by property filter menu
const getAllEventsProperties = async (req, res) => {
  const { writeKey } = await req.query;
  const response = await pool.query(
    `SELECT DISTINCT json_object_keys (properties) AS properties FROM fusion_event_${writeKey} WHERE write_key = $1 ORDER BY properties ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Returns a specific filter property's possible value eg: for filter property Browser return something like Safari, Chrome etc.
const getFilterPropertyValues = async (req, res) => {
  const { propertyName, writeKey } = await req.query;
  if (propertyName !== "") {
    const response = await pool.query(
      `SELECT DISTINCT properties ->> '${propertyName}' as ${propertyName} FROM fusion_event_${writeKey} WHERE write_key = $1 ORDER BY ${propertyName} ASC`,
      [writeKey]
    );
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};


//get funnel
const getFunnel = async(req, res) => {
  const {events, writeKey, dateTime, startDate, endDate} = await req.query;

  const [startDateTime, endDateTime] = await calculateDateTime(
    dateTime,
    startDate,
    endDate
  );

  let n_events = JSON.parse(events);
  let funnel = [];
  if(events) {
    for(let event of n_events){

      filterList = event['filters'];
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

      const response = await pool.query(
        `select count(distinct(properties->>'user_id')) from fusion_event_${writeKey} where event = '${event["event"]}' and write_key = $1 ${whereClause} AND timestamp BETWEEN $2 AND $3`,
        [writeKey, startDateTime, endDateTime]
      )
      response.rows[0]['event'] = event["event"];
      funnel.push(response.rows);
    }
  }
  return res.status(200).json(funnel);
}

module.exports = {
  getAllEventsName,
  getAllEventData,
  getAllEventsProperties,
  getFilterPropertyValues,
  getFunnel,
  validateQueryParameters,
  calculateDateTime,
};
