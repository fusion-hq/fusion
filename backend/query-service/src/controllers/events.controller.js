const { Pool } = require("pg");
require("dotenv").config();

// Connect to the postgres DB
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "fusion",
  password: "password",
  port: 5432,
});

//Return all unique event name in ascending order
const getAllEventsName = async (req, res) => {
  var { writeKey } = await req.query;
  const response = await pool.query(
    "SELECT DISTINCT event FROM fusion_event WHERE write_key = $1 ORDER BY event ASC",
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Return laest event entries(with properties) from the table in descednding order
const getAllEventData = async (req, res) => {
  const { event, filters, dateTime, startDate, endDate, writeKey } =
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

  var queryStatementWithoutEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'website' AS source, timestamp FROM fusion_event WHERE write_key = $1 ${whereClause} AND timestamp BETWEEN $2 AND $3 ORDER BY timestamp DESC`;
  var sqlParamsWithoutEventFilter = [writeKey, startDateTime, endDateTime];
  var queryStatementWithEventFilter = `SELECT event, event_id, properties, properties ->> 'user_id' AS user_id, properties ->> 'website' AS source, timestamp FROM fusion_event WHERE write_key = $1 AND event = $2 ${whereClause} AND timestamp BETWEEN $3 AND $4 ORDER BY timestamp DESC`;
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
    "SELECT DISTINCT json_object_keys (properties) AS properties FROM fusion_event WHERE write_key = $1 ORDER BY properties ASC",
    [writeKey]
  );
  res.status(200).json(response.rows);
};

// Return events with custom properties filter and datetime values
const getEventWithCustomFilters = async (req, res) => {
  // destructure the received query params
  const {
    eventOp: eventOperator,
    event: event,
    propertiesOp: propertiesOperator,
    properties: properties,
    pageOp: pageOperator,
    page: page,
    osOp: osOperator,
    os: os,
    browserOp: browserOperator,
    browser: browser,
    countryOp: countryOperator,
    country: country,
    cityOp: cityOperator,
    city: city,
    startDate: startDateTime,
    endDate: endDateTime,
  } = req.query;

  const query_statement = `SELECT * FROM trackdata WHERE event ${eventOperator} $1 AND properties ${propertiesOperator} $2 AND page ${pageOperator} $3 AND os ${osOperator} $4 AND browser ${browserOperator} $5 AND country ${countryOperator} $6 AND city ${cityOperator} $7 AND timestamp between $8 and $9`;
  const response = await pool.query(query_statement, [
    event,
    properties,
    page,
    os,
    browser,
    country,
    city,
    startDateTime,
    endDateTime,
  ]);
  res.status(200).json(response.rows);
};

//Returns a specific filter property's possible value eg: for filter property Browser return something like Safari, Chrome etc.
const getFilterPropertyValues = async (req, res) => {
  const { propertyName, writeKey } = await req.query;
  if (propertyName !== "") {
    const response = await pool.query(
      `SELECT DISTINCT properties ->> '${propertyName}' as ${propertyName} FROM fusion_event WHERE write_key = $1 ORDER BY ${propertyName} ASC`,
      [writeKey]
    );
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};

module.exports = {
  getAllEventsName,
  getAllEventData,
  getAllEventsProperties,
  getEventWithCustomFilters,
  getFilterPropertyValues,
};
