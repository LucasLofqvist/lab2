const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.URI;

exports.connect = () => {
    mongoose.connect(uri)
    .then(() => {console.log("Connected to database!")})
    .catch( (error) => {console.log("Could not connect to database " + error)});
}