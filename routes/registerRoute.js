const express = require("express");
const router = express.Router();

const Bank = require("../models/BankRegister");
const Vehicle = require("../models/VehicleRegister");

//@route  POST /register/bank
//@desc   Register a bank
//@access public
router.post("/bank", (req, res) => {});

//@route  POST /register/vehicle
//@desc   Register a vehicle company
//@access public
router.post("/vehicle", (req, res) => {});

module.exports = router;
