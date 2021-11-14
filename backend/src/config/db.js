const mongoose = require("mongoose");
require("dotenv").config();

const MongoURL = process.env.MONGO_URL;

const connect = () => mongoose.connect(MongoURL);

module.exports = connect;
