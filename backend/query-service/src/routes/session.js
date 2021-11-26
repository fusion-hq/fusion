const { Router } = require("express");
const router = Router();

const {
    getRecordingData,
    getAllRecordingsData,
    deleteRecordingData
} = require("../controllers/session.controller");

router.get("/allRecordingData", getAllRecordingsData);
router.get("/getRecordingData", getRecordingData);
router.get("/deleteRecording", deleteRecordingData);

module.exports = router;