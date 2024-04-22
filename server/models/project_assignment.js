const mongoose = require("mongoose");

const projectAssignmentSchema = new mongoose.Schema({
    employee_id: {type: String, required: true},
    project_code: {type: String, required: true},
    start_date: {type: Date, required: true}
}, {collection: "project_assignment"});

//Creating a compund index so there are no duplicate assignments in the database
projectAssignmentSchema.index({employee_id: 1, project_code: 1}, {unique: true});

module.exports = mongoose.model("Project_assignment", projectAssignmentSchema);