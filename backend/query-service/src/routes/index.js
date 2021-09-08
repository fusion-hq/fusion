const { Router } = require("express");
const router = Router();

const {
  saveNewConsoleUserId,
  getAllowedWebsites,
  addAllowedWebsite,
  deleteAllowedWebsite,
  getAllPageViewData,
  getAllEventData,
  getAllUsersCount,
} = require("../controllers/index.controller");

router.get("/save-userId", saveNewConsoleUserId);
router.get("/allowed-websites", getAllowedWebsites);
router.get("/add-allowed-website", addAllowedWebsite);
router.get("/delete-allowed-website", deleteAllowedWebsite);

//router.get("/pageviews", getAllPageViewData);
//router.get("/events", getAllEventData);
//router.get("/users", getAllUsersCount);

module.exports = router;
