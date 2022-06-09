const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentSchema = new Schema({
  section: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Content", contentSchema);
