const { DoseLog, MedicationPlan } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getDoseLogs = asyncHandler(async (req, res) => {
  const logs = await DoseLog.findAll({
    include: [{
      model: MedicationPlan,
      where: { userId: req.user.id },
    }],
    order: [['plannedAt', 'DESC']],
  });

  res.json(logs);
});

const createDoseLog = asyncHandler(async (req, res) => {
  const plan = await MedicationPlan.findOne({ where: { id: req.body.planId, userId: req.user.id } });

  if (!plan) {
    res.status(404);
    throw new Error('Plan not found for this user');
  }

  const log = await DoseLog.create(req.body);
  res.status(201).json(log);
});

module.exports = {
  getDoseLogs,
  createDoseLog,
};
