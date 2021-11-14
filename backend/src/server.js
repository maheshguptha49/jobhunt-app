const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const jobsController = require("./controllers/jobs.controller");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/jobs", jobsController);
function start() {
  app.listen(8000, async () => {
    await connect();
    console.log("listening on port 8000");
  });
}
module.exports = start;
