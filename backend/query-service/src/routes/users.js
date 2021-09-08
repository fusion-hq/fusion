const { Router } = require("express");
const router = Router();

const {
  getAllUsers,
  getAllUserProperties,
  getUserPropertyValues,
  getUserPersonalData,
  getUserPerformedEvents,
} = require("../controllers/users.controller");

router.get("/users", getAllUsers);
router.get("/user-properties", getAllUserProperties);
router.get("/user-property-value", getUserPropertyValues);
router.get("/user-personal-data", getUserPersonalData);
router.get("/user-performed-events", getUserPerformedEvents);

module.exports = router;
