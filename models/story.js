const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  title: { type: String, required: true },
  updated: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Story", storySchema);
