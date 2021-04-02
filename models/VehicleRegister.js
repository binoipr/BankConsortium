const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleRegisterSchema = new Schema({
  vehicle: { type: String, default: "bike", enum: ["bike", "car"] },
  company_registerNo: { type: Number, default: 0, unique: true },
  company_name: { type: String, required: true, trim: true },
  vehicle_name: { type: String, required: true },
});

module.exports = mongoose.model("VehicleRegister", vehicleRegisterSchema);
