const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const totalBookingSchema = new Schema({
  company_registerNo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],

  _company_id: { type: String, required: true },
  vehicle_bookingNo: { type: Number, default: 0 },
  total_amount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Total", totalBookingSchema);
