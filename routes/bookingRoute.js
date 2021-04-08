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
  console.log(vehicle.company_registerNo);
  if (vehicle) {
    var total = await Total.findOne(
      { company: "vehicle.company_registerNo" },
      (err, data) => {
        if (err) {
          res.send("error !!!");
        } else {
          res.send("Ok");
        }
      }
    );
  }
});

router.post("/total", async (req, res) => {
  const company = await Vehicle.findOne({
    company_registerNo: req.body.company_registerNo,
  });
  if (company) {
    if (company.company_registerNo == req.body.company_registerNo) {
      const _company_id = company._id;
      const { vehicle_bookingNo, total_amount } = req.body;

      const newTotal = new Total({
        _company_id,
        vehicle_bookingNo,
        total_amount,
      });
      newTotal
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ msg: "Error occured" }));
    } else {
      console.log("ERROR HOY 2");
    }
  } else {
    res.send({ msg: "No company in this no" });
  }
});

router.get("/list", (req, res) => {
  Booking.find()
    .sort({ vehicle_bookingNo: 1 })
    .then((list) => res.json(list));
});

module.exports = router;
