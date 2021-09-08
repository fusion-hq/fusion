/**
 * Fusion Analytcs Platform Tracking Server
 * Description: Receives xhr request to send pageview data or event data
 * from website using fusion tracking library and saves that data to postgres DB.
 * Author: Vikas Singh
 * Date: 4/3/21
 * Version : Alpha V2
 */

/**
 *  TODO
 *  1) Adapt to v3 tracking library
 *  2) use apikey and domain name to authenticate client website
 *  3) Write REGEX to get OS and browser from userAgent data of tracker payload
 */

const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const moment = require("moment");
const { v4 } = require("uuid");
const http = require("http");
const url = require("url");
const db = require("./queries");
require("dotenv").config();

//Transparent 1x1px image in base64 format
const GIF = Buffer.from(
  `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`,
  `base64`
);

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("---------------------------------------------");
db.createSystemTables();

//route listens for incoming event data
app.get("/event", (req, res) => {
  const { query } = url.parse(req.url, true);
  query.insertId = v4();
  query.received_at = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  console.log(query);
  console.log("---------------------------------------------");

  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);
  db.saveEventData(query);
});

//route listens for incoming event data
app.get("/user", (req, res) => {
  const { query } = url.parse(req.url, true);
  query.insertId = v4();
  query.received_at = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  console.log(query);
  console.log("---------------------------------------------");

  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);
  db.identifyUser(query);
});

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`fusion event-collector listening on port 3000...`);
});
