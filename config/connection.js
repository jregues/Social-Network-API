const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/boiler")


module.exports = mongoose.connection;