const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bankSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  register_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bank", bankSchema);
