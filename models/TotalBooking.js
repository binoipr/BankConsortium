const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const totalBookingSchema = new Schema({
  // company_registerNo: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "VehicleRegister",
  // },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VehicleRegister",
  },
  vehicle_bookingNo: { type: Number, default: 0 },
  total_amount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Total", totalBookingSchema);
