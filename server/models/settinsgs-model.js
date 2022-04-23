const { Schema, model } = require("mongoose");

const SettingsSchema = new Schema({
  currency: { type: String, required: true, default: "RUB" },
  language: {type: String, required: true, default: "RU"},
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Settings", SettingsSchema);
