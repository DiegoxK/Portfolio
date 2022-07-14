const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  iconType: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  md: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
