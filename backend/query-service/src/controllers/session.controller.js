const { Pool } = require("pg");
require("dotenv").config();
const {validateQueryParameters, calculateDateTime} = require('./events.controller')

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

//Return laest event entries(with properties) from the table in descednding order
const getAllRecordingsData = async (req, res) => {
  const { filters, dateTime, startDate, endDate, page, limit, writeKey } = await req.query;

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

  var queryStatementWithoutRecordingFilter = `SELECT sessionid, properties, properties ->> 'user_id' AS user_id, properties ->> 'website' AS source, timestamp FROM SESSION_RECORDING_${writeKey} WHERE write_key = $1 ${whereClause} AND timestamp BETWEEN $2 AND $3 ORDER BY timestamp DESC OFFSET ${(page - 1) * limit} LIMIT ${limit}`;
  var sqlParamsWithoutRecordingFilter = [writeKey, startDateTime, endDateTime];

  if (validateQueryParameters(dateTime, startDateTime, endDateTime)) {
    const response = await pool.query(queryStatementWithoutRecordingFilter, sqlParamsWithoutRecordingFilter);
    res.status(200).json(response.rows);
  } else {
    res.status(200).json([]);
  }
};

const getRecordingData = async(req, res) => {
  const {sessionId, writeKey} = await req.query;

  const response = await pool.query(`SELECT * from SESSION_RECORDING_${writeKey} where sessionid = $1 AND write_key = $2`, [sessionId, writeKey]);
  res.status(200).json(response.rows);
}

const deleteRecordingData = async(req, res) => {
const {sessionId, writeKey} = await req.query;

const response = await pool.query(`DELETE from SESSION_RECORDING_${writeKey} where sessionid = $1 AND write_key = $2`, [sessionId, writeKey]);
res.status(200).json(response.rows);
}


module.exports = {
  getRecordingData,
  getAllRecordingsData,
  deleteRecordingData
}