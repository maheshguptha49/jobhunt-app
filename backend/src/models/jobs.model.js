const mongoose = require("mongoose");
const jobsSchema = mongoose.Schema({
  description: { type: String, require: true },
  image: { type: String, require: true },
  type: { type: String, require: true },
  publication_date: { type: String, require: true },
  location: { type: String, require: true },
  level: { type: String, require: true },
  tags: { type: Array, require: true },
  company: { type: Object, require: false },
});
const Job = mongoose.model("job", jobsSchema);
module.exports = Job;
