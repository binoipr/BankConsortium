const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Total = require("../models/TotalBooking");

//@route  POST /api/booking/new
//@desc   Create a new booking
//@access public
router.post("/new", (req, res) => {
  const {
    email,
    company_registerNo,
    name,
    member_name,
    member_No,
    mobile_No,
    vehicle_bookingNo,
    downpayment,
    loan_Amount,
    total_Amount,
    interest,
    booking_date,
    expected_delivery,
  } = req.body;
  const newBooking = new Booking({
    email,
    company_registerNo,
    name,
    member_name,
    member_No,
    mobile_No,
    vehicle_bookingNo,
    downpayment,
    loan_Amount,
    total_Amount,
    interest,
    booking_date,
    expected_delivery,
  })
    .save()
    .then((booked_data) => res.json(booked_data));
});

router.put("/:id", async (req, res) => {
  let total = await Total.findById(req.params.id);
  console.log(total);
});

// total_Amount = parseInt(Total.total_Amount) + parseInt(total_Amount);
// vehicle_bookingNo =
//   parseInt(Total.vehicle_bookingNo) + parseInt(vehicle_bookingNo);
//   Total
//   const newTotal = new Total({
//     company_registerNo,
//     vehicle_bookingNo,
//     total_Amount,
//   })
//     .save()
//     .then((data) => res.json(data));
// });

//@route  GET /api/booking/list
//@desc   GET list of booking
//@access public
router.get("/list", (req, res) => {
  Booking.find()
    .sort({ vehicle_bookingNo: 1 })
    .then((list) => res.json(list));
});

module.exports = router;
