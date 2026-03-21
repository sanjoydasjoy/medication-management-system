const { Op } = require('sequelize');
const { Medicine } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getMedicines = asyncHandler(async (req, res) => {
  const { q } = req.query;
  const where = q
    ? {
        [Op.or]: [{ name: { [Op.like]: `%${q}%` } }, { genericName: { [Op.like]: `%${q}%` } }],
      }
    : {};

  const medicines = await Medicine.findAll({ where, order: [['name', 'ASC']] });
  res.json(medicines);
});

const getMedicineById = asyncHandler(async (req, res) => {
  const medicine = await Medicine.findByPk(req.params.id);

  if (!medicine) {
    res.status(404);
    throw new Error('Medicine not found');
  }

  res.json(medicine);
});

const createMedicine = asyncHandler(async (req, res) => {
  const medicine = await Medicine.create(req.body);
  res.status(201).json(medicine);
});

const updateMedicine = asyncHandler(async (req, res) => {
  const medicine = await Medicine.findByPk(req.params.id);

  if (!medicine) {
    res.status(404);
    throw new Error('Medicine not found');
  }

  await medicine.update(req.body);
  res.json(medicine);
});

const deleteMedicine = asyncHandler(async (req, res) => {
  const medicine = await Medicine.findByPk(req.params.id);

  if (!medicine) {
    res.status(404);
    throw new Error('Medicine not found');
  }

  await medicine.destroy();
  res.json({ message: 'Medicine deleted' });
});

module.exports = {
  getMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine,
};
