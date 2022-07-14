const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  profileImage: {
    type: String,
    required: true,
  },

  git: {
    type: String,
    required: true,
  },

  linkedin: {
    type: String,
    required: true,
  },

  twitter: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
