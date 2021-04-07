const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Vehicle = require("../models/VehicleRegister");
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
  // console.log(req.body);
  let vehicle = await Vehicle.findById(req.params.id);
  //console.log(vehicle.company_registerNo);
  // if (vehicle) {
  //   const total = await Total.find();
  //   console.log(total);
  //   if (!total) {
  //     res.send("Nothing here to update");
  //   } else {
  //     console.log("Hello Error");
  //   }
  // }
});

router.post("/total", (req, res) => {
  const { company, vehicle_bookingNo, total_amount } = req.body;
  const newTotal = new Total({
    company,
    vehicle_bookingNo,
    total_amount,
  });
  console.log(newTotal);
  newTotal.save(function (err, resp) {
    if (err) {
      console.log(err);
      res.send({
        message: "something went wrong",
      });
    } else {
      res.send({
        message: "the appointment has been saved",
      });
    }
  });
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
