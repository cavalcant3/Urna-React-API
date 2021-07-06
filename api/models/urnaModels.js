"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandiateSchema = new Schema({
  name: {
    type: String,
    required: "Enter candidate's name ",
  },
  Created_date: {
    Type: Date,
    dafault: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model("Candidates", CandiateSchema);
