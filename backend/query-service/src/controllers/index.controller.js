const { Pool } = require("pg");
require("dotenv").config();

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

//Checks ConsoleUser table if user_id exists otherwise inserts it
const saveNewConsoleUserId = async (req, res) => {
  const { userId } = await req.query;

  //create a console user if not exists
  await pool.query(
    "CREATE TABLE IF NOT EXISTS ConsoleUser (api_key VARCHAR ( 64 ));"
  )

  // insert in console user
  await pool.query(
    "INSERT INTO ConsoleUser (api_key) SELECT $1 WHERE NOT EXISTS (SELECT * FROM ConsoleUser WHERE api_key = $2)",
    [userId, userId]
  );

  //AllowedWebsites
  await pool.query(
    `CREATE TABLE IF NOT EXISTS AllowedWebsites_${userId} (website_id INT GENERATED ALWAYS AS IDENTITY, website_name VARCHAR, write_key VARCHAR)`
  );

  //Dashboards
  await pool.query(
    `CREATE TABLE IF NOT EXISTS Dashboards_${userId} (dashbaord_id INT GENERATED ALWAYS AS IDENTITY, dashboard_name VARCHAR, dashboard_description VARCHAR, created_by VARCHAR, write_key VARCHAR)`
  );

  //Saved Metrics
  await pool.query(
    `CREATE TABLE IF NOT EXISTS SavedMetrics_${userId} (
      metrics_id INT GENERATED ALWAYS AS IDENTITY,
      metrics_name VARCHAR,
      dashboard VARCHAR,
      aggregator VARCHAR,
      event VARCHAR,
      filters VARCHAR,
      timescale VARCHAR,
      chart_type VARCHAR,
      group_by VARCHAR,
      date_time VARCHAR,
      start_date VARCHAR,
      end_date VARCHAR,
      write_key VARCHAR,
      created_at TIMESTAMPTZ DEFAULT Now() 
    )`
  );

  //fusion_event
  await pool.query(
    `CREATE TABLE IF NOT EXISTS fusion_event_${userId} (
        event_id serial NOT NULL PRIMARY KEY,
        event VARCHAR,
        properties json,
        write_key VARCHAR,
        timestamp TIMESTAMP
    )`
  );

  //fusion_user
  await pool.query(
    `CREATE TABLE IF NOT EXISTS fusion_user_${userId} (
        id serial NOT NULL PRIMARY KEY,
        uuid VARCHAR,
        properties json,
        user_ids TEXT [],
        is_identified BOOLEAN,
        write_key VARCHAR,
        created_at TIMESTAMP
    )`
  );

  //cohort
  await pool.query(
    `CREATE TABLE IF NOT EXISTS SavedCohorts_${userId} (
      id serial NOT NULL PRIMARY KEY,
      name VARCHAR,
      description VARCHAR,
      filters json,
      write_key VARCHAR,
      created_at TIMESTAMPTZ DEFAULT Now() 
    )`
  );

  //session recording
  await pool.query(
    `CREATE TABLE IF NOT EXISTS SESSION_RECORDING (
        sessionId VARCHAR,
        recording json [],
        properties json,
        write_key VARCHAR,
        timestamp TIMESTAMP
    );`
  )

  res.status(200).json({"status": "table_created"});
};

// Return all allowed urls for that user from AllowedUrl Table
const getAllowedWebsites = async (req, res) => {
  const { writeKey } = await req.query;
  const response = await pool.query(
    `SELECT DISTINCT website_name FROM AllowedWebsites_${writeKey} WHERE write_key=$1`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

// Return all allowed urls for that user from AllowedUrl Table
const addAllowedWebsite = async (req, res) => {
  const { websiteName, writeKey } = await req.query;
  await pool.query(
    `INSERT INTO AllowedWebsites_${writeKey} (website_name, write_key) VALUES ($1, $2)`,
    [websiteName, writeKey]
  );
  //Return updated list
  const response = await pool.query(
    `SELECT DISTINCT website_name FROM AllowedWebsites_${writeKey} WHERE write_key=$1`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

// Return all allowed urls for that user from AllowedUrl Table
const deleteAllowedWebsite = async (req, res) => {
  const { websiteName, writeKey } = await req.query;
  await pool.query(
    `DELETE FROM AllowedWebsites_${writeKey} WHERE website_name=$1 AND write_key=$2`,
    [websiteName, writeKey]
  );
  //Return updated list
  const response = await pool.query(
    `SELECT DISTINCT website_name FROM AllowedWebsites_${writeKey} WHERE write_key=$1`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

module.exports = {
  saveNewConsoleUserId,
  getAllowedWebsites,
  addAllowedWebsite,
  deleteAllowedWebsite,
};
