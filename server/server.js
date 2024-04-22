const express = require("express");
const path = require("path");
const dbConnector = require("./dbConnector");

const employeeRouter = require("./routes/employeeRoutes");
const projectRouter = require("./routes/projectRoutes");
const assignmentRouter = require("./routes/assignmentRoutes");

require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

//Setting the express static folder as dist folder
app.use(express.static(path.join(__dirname, "../client/dist")));

//Mounting the routers
app.use("/api/employees", employeeRouter);
app.use("/api/projects", projectRouter);
app.use("/api/project_assignments", assignmentRouter);

dbConnector.connect();

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}..`);
});