const { Router } = require("express");
const router = Router();

const {
  saveNewConsoleUserId,
  getAllowedWebsites,
  addAllowedWebsite,
  deleteAllowedWebsite,
} = require("../controllers/index.controller");

router.get("/save-userId", saveNewConsoleUserId);
router.get("/allowed-websites", getAllowedWebsites);
router.get("/add-allowed-website", addAllowedWebsite);
router.get("/delete-allowed-website", deleteAllowedWebsite);

module.exports = router;
