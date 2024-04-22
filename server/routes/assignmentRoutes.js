const express = require("express");
const router = express.Router();

const {newAssignment, tableData} = require("../controllers/assignmentController");

router.post("/", newAssignment);

router.get("/", tableData);

module.exports = router;