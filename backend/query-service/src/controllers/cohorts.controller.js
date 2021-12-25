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

const saveCohort = async(req, res) => {
  const { writeKey, name, description, filters} = await req.query;
  await pool.query(
    `INSERT INTO SavedCohorts_${writeKey} (name, description, filters, write_key) VALUES ($1, $2, $3, $4)`,
    [name, description, filters, writeKey]
  );

  const response = await pool.query(
    "SELECT name, description, filters FROM SavedCohorts WHERE write_key = $1 ORDER BY id ASC",
    [writeKey]
  );
  res.status(200).json(response.rows);
}

const getCohorts = async(req, res) => {

  const {writeKey} = await req.query;

  const response = await pool.query(
    `SELECT id, name, description, filters FROM SavedCohorts_${writeKey} WHERE write_key = $1 ORDER BY id ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
}

const deleteCohorts = async(req, res) => {
  const {id, writeKey} = req.query

  const response = await pool.query(
    `DELETE FROM SavedCohorts_${writeKey} WHERE id = $1 and write_key = $2`,
    [id, writeKey]
  );

  res.status(200).json(response.rows);
}

const getCohortEmails = async(req, res) => {
  const {writeKey, filter} = await req.query;
  parsed_filter = JSON.parse(filter)

  let parsed_filter_key = Object.keys(parsed_filter)[0]
  let parsed_filter_val = Object.values(parsed_filter)[0]

  const response = await pool.query(
    `SELECT * from fusion_user_${writeKey} where write_key = $1 and properties ->> '${parsed_filter_key}' = '${parsed_filter_val}' and properties ->> 'email' is not NULL`,
    [writeKey]
  )
  res.status(200).json(response.rows);
}

module.exports = {
  saveCohort,
  getCohorts,
  getCohortEmails,
  deleteCohorts
};