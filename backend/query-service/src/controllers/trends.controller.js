const { Pool } = require("pg");
require("dotenv").config();
var moment = require("moment"); 

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD ,
  port: process.env.POSTGRES_PORT,
});

// Return requested trends data from db
const getTrendsData = async (req, res) => {
  // destructure the received query params
  const {
    aggregator,
    timescale,
    event,
    filters,
    groupBy,
    dateTime,
    startDate,
    endDate,
    writeKey,
  } = await req.query;

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

  /** Latest Custom SQL for Fusion (here no breakdown by filter is applied) used for graphs like line, bar etc**/
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

  var totalVolumeWithoutBreakdown = `SELECT COUNT(1), date_trunc($1, timestamp) as approx_timestamp FROM fusion_event_${writeKey} WHERE event = $2 ${whereClause} AND write_key = $3 AND timestamp between $4 and $5 group by approx_timestamp ORDER BY approx_timestamp`;
  var totalVolumeWithBreakdown = `SELECT COUNT(1), properties ->> '${groupBy}' AS ${groupBy} FROM fusion_event_${writeKey} WHERE event = $1 ${whereClause} AND write_key = $2 AND timestamp between $3 and $4 GROUP BY ${groupBy} ORDER BY Count(1) DESC`;
  var uniqueWithoutBreakdown = `SELECT COUNT(DISTINCT properties ->> 'user_id'), date_trunc($1, timestamp) as approx_timestamp FROM fusion_event_${writeKey} WHERE event = $2 ${whereClause} AND write_key = $3 AND timestamp between $4 and $5 group by approx_timestamp ORDER BY approx_timestamp`;
  var uniqueWithBreakdown = `SELECT COUNT(DISTINCT properties ->> 'user_id'), properties ->> '${groupBy}' AS ${groupBy} FROM fusion_event_${writeKey} WHERE event = $1 ${whereClause} AND write_key = $2 AND timestamp between $3 and $4 GROUP BY ${groupBy} ORDER BY Count(1) DESC`;

  var sqlParamsWithoutBreakdown = [
    timescale,
    event,
    writeKey,
    startDateTime,
    endDateTime,
  ];
  var sqlParamsWithBreakdown = [event, writeKey, startDateTime, endDateTime];

  var finalQueryStatement;
  var finalSqlParams;

  if (groupBy == "") {
    finalSqlParams = sqlParamsWithoutBreakdown;
    if (aggregator == "Total") {
      finalQueryStatement = totalVolumeWithoutBreakdown;
    } else if (aggregator == "Unique") {
      finalQueryStatement = uniqueWithoutBreakdown;
    }
  } else if (groupBy !== "") {
    finalSqlParams = sqlParamsWithBreakdown;
    if (aggregator == "Total") {
      finalQueryStatement = totalVolumeWithBreakdown;
    } else if (aggregator == "Unique") {
      finalQueryStatement = uniqueWithBreakdown;
    }
  }

  if (
    validateQueryParameters(
      timescale,
      aggregator,
      dateTime,
      startDateTime,
      endDateTime
    )
  ) {
    const response = await pool.query(finalQueryStatement, finalSqlParams);
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};

// validates query paramters of incoming request to avoid breaking the system
function validateQueryParameters(
  timescale,
  aggregator,
  dateTime,
  startDateTime,
  endDateTime
) {
  if (
    (timescale == "minute" ||
      timescale == "hour" ||
      timescale == "day" ||
      timescale == "week" ||
      timescale == "month") &&
    (aggregator == "Total" || aggregator == "Unique") &&
    (dateTime == "Today" ||
      dateTime == "Yesterday" ||
      dateTime == "Last 24 hours" ||
      dateTime == "Last 48 hours" ||
      dateTime == "Last 7 days" ||
      dateTime == "Last 30 days" ||
      dateTime == "Last 90 days" ||
      dateTime == "All time" ||
      dateTime == "Date range")
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
  getTrendsData,
};
