const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  email: { type: Schema.Types.ObjectId, ref: "BankRegister" },
  company_registerNo: { type: Schema.Types.ObjectId, ref: "VehicleRegister" },
  member_name: { type: String, required: true },
  member_No: { type: Number, required: true, unique: true },
  mobile_No: { type: String, required: true },

  vehicle_bookingNo: { type: Number, default: 0, unique: true },
  downpayment: { type: Number, required: true },
  loan_Amount: { type: Number, required: true },
  total_Amount: { type: Number, required: true },

  interest: { type: Number, required: true },
  booking_date: { type: Date, required: true },
  expected_delivery: { type: Date, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
