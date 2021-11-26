const { Router } = require("express");
const router = Router();

const {
    saveCohort,
    getCohorts,
    getCohortEmails,
    deleteCohorts
} = require("../controllers/cohorts.controller");

router.get("/saveCohort", saveCohort);
router.get("/getCohorts", getCohorts);
router.get("/deleteCohort", deleteCohorts);
router.get("/getCohortEmails", getCohortEmails);

module.exports = router;
