const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  section: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
    maxlength: 70,
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

module.exports = mongoose.model("Blog", blogSchema);
