const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const totalBookingSchema = new Schema({
  company_registerNo: { type: Schema.Types.ObjectId, ref: "VehicleRegister" },
  vehicle_bookingNo: { type: Schema.Types.ObjectId, ref: "Booking" },
  total_amount: { type: Schema.Types.ObjectId, ref: "Booking" },
});

module.exports = mongoose.model("Total", totalBookingSchema);
