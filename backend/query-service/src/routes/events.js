const { Router } = require("express");
const router = Router();

const {
  getAllEventsName,
  getAllEventData,
  getAllEventsProperties,
  getEventWithCustomFilters,
  getFilterPropertyValues,
} = require("../controllers/events.controller");

//returns all available unique event name
router.get("/events-name", getAllEventsName);
//returns latest raw events (with properties and other info) entries (if event name not selected returns all events)
router.get("/events", getAllEventData);
//returns latest unique event properties
router.get("/events-properties", getAllEventsProperties);

//build a query with cutom variables used for trend graph (selecting atleast one event in mandetory)
router.get("/events-custom", getEventWithCustomFilters);

//returns available values for a filter property
//eg: localhost:6060/filter-property-value?property=browser
router.get("/filter-property-value", getFilterPropertyValues);

module.exports = router;
