const { Doctor } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.findAll({ order: [['rating', 'DESC']] });
  res.json(doctors);
});

const createDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
});

module.exports = {
  getDoctors,
  createDoctor,
};
