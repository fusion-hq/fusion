const { Router } = require("express");
const router = Router();

const {
    savePlugin,
    getPluginStatus
} = require('../controllers/plugins.controller');

router.get("/savePlugin", savePlugin);
router.get("/getPluginStatus", getPluginStatus);

module.exports = router;