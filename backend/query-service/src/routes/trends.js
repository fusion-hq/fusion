const { Router } = require("express");
const router = Router();

const { getTrendsData } = require("../controllers/trends.controller");

router.get("/trends", getTrendsData);

module.exports = router;
