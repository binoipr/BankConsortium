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

//@route  PUT /api/booking/:id
//@desc   Update total amount
//@access public
router.put("/:id", async (req, res) => {
  let vehicle = await Vehicle.findById(req.params.id);
  if (vehicle._id == req.params.id) {
    var old_total = await Total.findOne({ _company_id: vehicle._id });
    console.log(old_total);
    var total =
      parseInt(old_total.total_amount) + parseInt(req.body.total_amount);
    console.log(old_total._id);
    Total.findByIdAndUpdate(
      old_total._id,
      { total_amount: total },
      (err, data) => {
        if (err) res.send({ msg: "Update error" });
        else res.json(data);
      }
    );
  } else {
    res.json({ msg: "Not a registerd vehicle" });
  }
});

//@route  POST /api/booking/total
//@desc   Adding  total amount
//@access public
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
