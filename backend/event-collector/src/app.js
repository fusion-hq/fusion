const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const moment = require("moment");
const { v4 } = require("uuid");
const http = require("http");
const url = require("url");
const db = require("./queries");
const {fusionQueue} = require('../src/queue')
require("dotenv").config();

//Transparent 1x1px image in base64 format
const GIF = Buffer.from(
  `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`,
  `base64`
);

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: false}));

//route listens for incoming event data
app.post("/event", (req, res) => {
  const query  = req.body;
  query.insertId = v4();
  query.received_at = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  // console.log(query);
  // console.log("---------------------------------------------");

  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);
  fusionQueue.add('eventData', query, {removeOnComplete: true, removeOnFail: 100});
  // db.saveEventData(query);
});

app.post("/session", (req, res) => {
  const query = req.body
  
  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);

  fusionQueue.add('sessionRecordingData', query, {removeOnComplete: true, removeOnFail: 100})

  // db.saveRecording(query);
})

app.post("/createSession", (req, res) => {
  const query = req.body;
  query.insertId = v4();
  query.received_at = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  // console.log(query);
  // console.log("---------------------------------------------");

  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);

  fusionQueue.add('createSessionData', query, {removeOnComplete: true, removeOnFail: 100})
  // db.createNewRecordingInstance(query);
});

//route listens for incoming event data
app.get("/user", (req, res) => {
  const { query } = url.parse(req.url, true);
  query.insertId = v4();
  query.received_at = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  // console.log(query);
  // console.log("---------------------------------------------");

  res.setHeader("cache-control", "private, no-cache, no-store, max-age=0");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("content-length", GIF.length);
  res.setHeader("content-type", "image/gif");
  res.send(GIF);

  fusionQueue.add('userData', query,{removeOnComplete: true, removeOnFail: 100});
  // db.identifyUser(query);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`fusion event-collector listening on port 3000...`);
});
