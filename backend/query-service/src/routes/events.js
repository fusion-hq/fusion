const { Router } = require("express");
const router = Router();

const {
  getAllEventsName,
  getAllEventData,
  getAllEventsProperties,
  getFilterPropertyValues,
  getFunnel,
} = require("../controllers/events.controller");

//returns all available unique event name
router.get("/events-name", getAllEventsName);
//returns latest raw events (with properties and other info) entries (if event name not selected returns all events)
router.get("/events", getAllEventData);
//returns latest unique event properties
router.get("/events-properties", getAllEventsProperties);
//returns available values for a filter property
//eg: localhost:6060/filter-property-value?property=browser
router.get("/filter-property-value", getFilterPropertyValues);

//funnel
router.get("/funnel", getFunnel)

module.exports = router;
