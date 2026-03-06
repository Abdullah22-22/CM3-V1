const VehicleRental = require('../models/vehicleRentalModel');
const mongoose = require('mongoose');

// GET /api/vehicleRentals
const getAllVehicleRentals = async (req, res) => {
	try {
    	const vehicles = await VehicleRental.find({}).sort({ createdAt: -1 });
    	res.status(200).json(vehicles);
	} catch (error) {
    	res.status(500).json({ message: "Failed to retrieve vehicles" });
  }
};

// POST /api/vehicleRentals
const createVehicleRental = async (req, res) => {
  try {

    const {
      vehicleModel,
      category,
      description,
      agency,
      location,
      dailyPrice,
      bookingDeadline,
      insurancePolicy
    } = req.body;

    const vehicle = await  VehicleRental.create({
      vehicleModel,
      category,
      description,
      agency,
      location,
      dailyPrice,
      bookingDeadline,
      insurancePolicy
    });

    return res.status(201).json({
      ok: true,
      data: vehicle 
    })

  } catch (err) {
    return res.satus(400).json({
      ok: false,
      message: "somting went wrong",
      error: err.message
    })
  }
};

// GET /api/vehicleRentals/:vehicleRentalId
const getVehicleRentalById = async (req, res) => {

	const { vehicle_id } = req.params;

  	if (!mongoose.Types.ObjectId.isValid(vehicle_id)) {
    	return res.status(400).json({ message: "Invalid vehicle ID" });
  }

  	try {
    	const vehicle = await Job.findById(vehicle_id);
    	if (vehicle) {
    	  res.status(200).json(vehicle);
    	} else {
    	  res.status(404).json({ message: "Vehicle not found" });
    	}
  } catch (e) {
    	res.status(500).json({ message: "Failed to retrieve vehicle" });
  }
};


// PUT /api/vehicleRentals/:vehicleRentalId
const updateVehicleRental = async (req, res) => {
  res.send("updateVehicleRental");
};

// DELETE /api/vehicleRentals/:vehicleRentalId
const deleteVehicleRental = async (req, res) => {
  res.send("deleteVehicleRental");
};

module.exports = {
  getAllVehicleRentals,
  createVehicleRental,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
};
