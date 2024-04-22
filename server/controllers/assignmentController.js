const Assignment = require("../models/project_assignment");
const Project = require("../models/project");
const Employee = require("../models/employee");

//Assign employee to project
exports.newAssignment = async (req, res) => {
    try {
        const {employee_id, project_code, start_date} = req.body;

        if (employee_id && project_code && start_date) {

            //Check if the project exists
            const project = await Project.findOne({project_code});
            if (!project) {
                return res.status(400).json({message: "The specified project does not exist."})
            }

            //Check if the employee exists
            const employee = await Employee.findOne({employee_id});
            if (!employee) {
                return res.status(400).json({message: "The specified employee does not exist."})
            }

            const newAssignment = new Assignment({
                employee_id,
                project_code,
                start_date
            });

            const response = await newAssignment.save();

            res.status(201).json({message: "Assignment added!", assignment: response});
        }
        else {
            res.status(400).json({message: "Missing required field."});
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong!", error: error.message});
    }
};

exports.tableData = async (req, res) => {
    try {
        const response = await Assignment.aggregate([
            {
                $lookup: {
                    from: "employee", //Collection name (Maybe should have been in plural)
                    localField: "employee_id",
                    foreignField: "employee_id",
                    as: "emp"
                }
            }
        ]);
        
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({message: "Something went wrong!", error: error.message});
    }
};