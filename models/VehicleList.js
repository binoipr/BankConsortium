const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleListSchema = new Schema({
  company_registerNo: { type: Schema.Types.ObjectId, ref: "VehicleRegister" },
  vehicle_name: { type: String, required: true },
});

module.exports = mongoose.model("VehicleList", vehicleListSchema);
