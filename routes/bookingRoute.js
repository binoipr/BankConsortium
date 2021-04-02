const express = require("express");
const router = express.Router();
const Bank = require("../models/Booking");
const Total = require("../models/Booking");

//@route  POST /api/booking/new
//@desc   Create a new booking
//@access public
router.post("/new", (req, res) => {});

module.exports = router;
