const express = require("express");
const router = express.Router();

const Bank = require("../models/BankRegister");
const Vehicle = require("../models/VehicleRegister");
const VehicleList = require("../models/VehicleList");

//@route  POST /register/bank
//@desc   Register a bank
//@access public
router.post("/bank", (req, res) => {
  const { name, email, password } = req.body;
  const newBank = new Bank({
    name,
    email,
    password,
  });
  newBank.save().then((bank) => res.json(bank));
});

//@route  GET /register/bank/list
//@desc   Get registered bank list
//@access public
router.get("/bank/list", (req, res) => {
  Bank.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ msg: "Bad request" }));
});

//@route  POST /register/vehicle
//@desc   Register a vehicle company
//@access public
router.post("/vehicle", (req, res) => {
  const { vehicle, company_registerNo, company_name } = req.body;
  const newCompany = new Vehicle({
    vehicle,
    company_registerNo,
    company_name,
  });
  newCompany.save().then((company) => res.json(company));
});

//@route  POST /register/vehicle/add
//@desc   Adding vehicle names
//@access public
router.post("/vehicle/add", (req, res) => {
  const { company_registerNo, vehicle_name } = req.body;
  const newVehicle = new VehicleList({
    company_registerNo,
    vehicle_name,
  });
  newVehicle.save().then((veh_item) => res.json(veh_item));
});

module.exports = router;
