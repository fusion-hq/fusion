const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER || process.env.DB_USER_HOSTED,
  host: process.env.POSTGRES_HOST || process.env.DB_HOST_HOSTED,
  database: process.env.POSTGRES_DB || process.env.DB_HOSTED,
  password: process.env.POSTGRES_PASSWORD || process.env.DB_PASSWORD_HOSTED,
  port: process.env.POSTGRES_PORT || process.env.DB_PORT_HOSTED,
  ssl: process.env.NODE_ENV === 'PRODUCTION' ? { rejectUnauthorized: false } : { rejectUnauthorized: true }
});

//Return all available dashboards in asc order for logged in user
const getAllDashboards = async (req, res) => {
  const { writeKey } = await req.query;
  const response = await pool.query(
    `SELECT dashboard_name, dashboard_description, created_by FROM Dashboards_${writeKey} WHERE write_key = $1 ORDER BY dashboard_name ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Return all available dashboards in asc order for logged in user
const createDashboard = async (req, res) => {
  const { name, description, createdBy, writeKey } = await req.query;
  await pool.query(
    `INSERT INTO Dashboards_${writeKey} (dashboard_name, dashboard_description, created_by, write_key) VALUES ($1, $2, $3, $4)`,
    [name, description, createdBy, writeKey]
  );
  // Return new list of dashboards after new dashboard is saved into db
  const response = await pool.query(
    `SELECT dashboard_name, dashboard_description, created_by FROM Dashboards_${writeKey} WHERE write_key = $1 ORDER BY dashboard_name ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Return all available dashboards in asc order for logged in user
const deleteDashboard = async (req, res) => {
  const { name, description, createdBy, writeKey } = await req.query;

  // Delete all the metrics saved on that dashbaord
  await pool.query(
    `DELETE FROM SavedMetrics_${writeKey} WHERE dashboard=$1 AND write_key=$2`,
    [name, writeKey]
  );
  // Delete the dashbaord
  await pool.query(
    `DELETE FROM Dashboards_${writeKey} WHERE dashboard_name = $1 AND dashboard_description = $2 AND created_by = $3 AND write_key = $4`,
    [name, description, createdBy, writeKey]
  );
  // Return new list of dashboards
  const response = await pool.query(
    `SELECT dashboard_name, dashboard_description, created_by FROM Dashboards_${writeKey} WHERE write_key = $1 ORDER BY dashboard_name ASC`,
    [writeKey]
  );
  res.status(200).json(response.rows);
};

//Saves a user defined metrics into db
const getAllSavedMetrics = async (req, res) => {
  const { dashboard, writeKey } = await req.query;
  const response = await pool.query(
    `SELECT * FROM SavedMetrics_${writeKey} WHERE dashboard=$1 AND write_key=$2 ORDER BY created_at`,
    [dashboard, writeKey]
  );
  res.status(200).json(response.rows);
};

//Saves a user defined metrics into db
const saveMetrics = async (req, res) => {
  const {
    metricsName,
    dashboard,
    aggregator,
    event,
    filters,
    timescale,
    chartType,
    groupBy,
    dateTime,
    startDate,
    endDate,
    writeKey,
  } = await req.query;

  const response = await pool.query(
    `INSERT INTO SavedMetrics_${writeKey} ( metrics_name, dashboard, aggregator, event, filters, timescale, chart_type, group_by, date_time, start_date, end_date, write_key) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`,
    [
      metricsName,
      dashboard,
      aggregator,
      event,
      filters,
      timescale,
      chartType,
      groupBy,
      dateTime,
      startDate,
      endDate,
      writeKey,
    ]
  );
  res.status(200).json([]);
};

// Delete a saved metrics on a specific dashboard of a specific specific user
const deleteSavedMetrics = async (req, res) => {
  const { metricsName, dashboard, writeKey } = await req.query;

  const response = await pool.query(
    `DELETE FROM SavedMetrics_${writeKey} WHERE metrics_name=$1 AND dashboard=$2 AND write_key=$3;`,
    [metricsName, dashboard, writeKey]
  );
  res.status(200).json([]);
};

module.exports = {
  getAllDashboards,
  createDashboard,
  deleteDashboard,
  getAllSavedMetrics,
  saveMetrics,
  deleteSavedMetrics,
};
