const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "BankRegister" },
  // company_registerNo: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "VehicleRegister",
  // },
  member_name: { type: String, required: true },
  member_No: { type: Number, required: true, unique: true },
  mobile_No: { type: String, required: true, max: 9999999999 },

  downpayment: { type: Number, required: true },
  loan_Amount: { type: Number, required: true },
  total_Amount: { type: Number, required: true },

  interest: { type: Number, required: true },
  booking_date: { type: String, required: true },
  expected_delivery: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
