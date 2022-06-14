const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gitUrl: {
    type: String,
    required: true,
  },
  linkeinUrl: {
    type: String,
    required: true,
  },
  twitterUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
