const { Router } = require("express");
const router = Router();

const {
  getAllDashboards,
  createDashboard,
  deleteDashboard,
  getAllSavedMetrics,
  saveMetrics,
  deleteSavedMetrics,
} = require("../controllers/dashbaords.controller");

//returns all available unique event name
router.get("/dashboards", getAllDashboards);
router.get("/create-dashboard", createDashboard);
router.get("/delete-dashboard", deleteDashboard);
router.get("/metrics", getAllSavedMetrics);
router.get("/save-metrics", saveMetrics);
router.get("/delete-metrics", deleteSavedMetrics);

module.exports = router;
