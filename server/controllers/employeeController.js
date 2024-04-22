const Employee = require("../models/employee");

exports.newEmployee = async (req, res) => {
    try {
        const {employee_id, full_name, email, hashed_password} = req.body;

        if (employee_id && full_name && email && hashed_password) {

            const newEmployee = new Employee({
                employee_id,
                full_name,
                email,
                hashed_password
            });

            const response = await newEmployee.save();

            res.status(201).json({message: "Employee added!", employee: response});
        }
        else {
            res.status(400).json({message: "Missing required field."})
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong!", error: error.message});
    }
};