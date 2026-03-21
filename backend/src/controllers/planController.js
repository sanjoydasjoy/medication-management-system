const { MedicationPlan, Medicine } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getPlans = asyncHandler(async (req, res) => {
  const plans = await MedicationPlan.findAll({
    where: { userId: req.user.id },
    include: [{ model: Medicine }],
    order: [['createdAt', 'DESC']],
  });

  res.json(plans);
});

const createPlan = asyncHandler(async (req, res) => {
  const plan = await MedicationPlan.create({
    ...req.body,
    userId: req.user.id,
  });

  res.status(201).json(plan);
});

const updatePlan = asyncHandler(async (req, res) => {
  const plan = await MedicationPlan.findOne({ where: { id: req.params.id, userId: req.user.id } });

  if (!plan) {
    res.status(404);
    throw new Error('Plan not found');
  }

  await plan.update(req.body);
  res.json(plan);
});

const deletePlan = asyncHandler(async (req, res) => {
  const plan = await MedicationPlan.findOne({ where: { id: req.params.id, userId: req.user.id } });

  if (!plan) {
    res.status(404);
    throw new Error('Plan not found');
  }

  await plan.destroy();
  res.json({ message: 'Plan deleted' });
});

module.exports = {
  getPlans,
  createPlan,
  updatePlan,
  deletePlan,
};
