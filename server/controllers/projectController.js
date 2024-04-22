const Project = require("../models/project");

exports.newProject = async (req, res) => {
    try {
        const {project_code, project_name, project_description} = req.body;

        if (project_code && project_name && project_description) {

            const newProject = new Project({
                project_code,
                project_name,
                project_description
            });

            const response = await newProject.save();

            res.status(201).json({message: "Project added!", project: response});
        }
        else {
            res.status(400).json({message: "Missing required field."});
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong!", error: error.message});
    }
};