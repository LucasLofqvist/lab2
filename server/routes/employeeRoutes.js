const express = require("express");
const router = express.Router();
const {newEmployee} = require("../controllers/employeeController");

router.post("/", newEmployee);

module.exports = router;