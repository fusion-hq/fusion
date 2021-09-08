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

//Checks ConsoleUser table if user_id exists otherwise inserts it
const saveNewConsoleUserId = async (req, res) => {
  const { userId } = await req.query;

  const response = await pool.query(
    "INSERT INTO ConsoleUser (api_key) SELECT $1 WHERE NOT EXISTS (SELECT * FROM ConsoleUser WHERE api_key = $2)",
    [userId, userId]
  );
  res.status(200);
};

// Return all entries on PageViewData table
const getAllPageViewData = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM TrackData WHERE event = 'Pageview' ORDER BY id DESC"
  );
  res.status(200).json(response.rows);
};

// Return unique userIds from PageViewData Table
const getAllUsersCount = async (req, res) => {
  const response = await pool.query(
    "SELECT COUNT(DISTINCT userid) FROM trackdata"
  );
  res.status(200).json(response.rows);
};

// Return all allowed urls for that user from AllowedUrl Table
const getAllowedWebsites = async (req, res) => {
  const { writeKey } = await req.query;
  const response = await pool.query(
    "SELECT DISTINCT website_name FROM AllowedWebsites WHERE write_key=$1",
    [writeKey]
  );
  res.status(200).json(response.rows);
};

// Return all allowed urls for that user from AllowedUrl Table
const addAllowedWebsite = async (req, res) => {
  const { websiteName, writeKey } = await req.query;
  await pool.query(
    "INSERT INTO AllowedWebsites(website_name, write_key) VALUES ($1, $2)",
    [websiteName, writeKey]
  );
  //Return updated list
  const response = await pool.query(
    "SELECT DISTINCT website_name FROM AllowedWebsites WHERE write_key=$1",
    [writeKey]
  );
  res.status(200).json(response.rows);
};

// Return all allowed urls for that user from AllowedUrl Table
const deleteAllowedWebsite = async (req, res) => {
  const { websiteName, writeKey } = await req.query;
  await pool.query(
    "DELETE FROM AllowedWebsites WHERE website_name=$1 AND write_key=$2",
    [websiteName, writeKey]
  );
  //Return updated list
  const response = await pool.query(
    "SELECT DISTINCT website_name FROM AllowedWebsites WHERE write_key=$1",
    [writeKey]
  );
  res.status(200).json(response.rows);
};

module.exports = {
  saveNewConsoleUserId,
  getAllPageViewData,
  getAllUsersCount,
  getAllowedWebsites,
  addAllowedWebsite,
  deleteAllowedWebsite,
};
