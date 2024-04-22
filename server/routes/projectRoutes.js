const express = require("express");
const router = express.Router();

const {newProject} = require("../controllers/projectController");

router.post("/", newProject);

module.exports = router;