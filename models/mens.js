
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ranking: {
    type: Number,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: '100m'
  },
});

const User = new mongoose.model("User", menSchema );

module.exports = User;