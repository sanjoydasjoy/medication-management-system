const { Reminder, MedicationPlan } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getReminders = asyncHandler(async (req, res) => {
  const reminders = await Reminder.findAll({
    include: [{
      model: MedicationPlan,
      where: { userId: req.user.id },
    }],
    order: [['remindAt', 'ASC']],
  });

  res.json(reminders);
});

const createReminder = asyncHandler(async (req, res) => {
  const plan = await MedicationPlan.findOne({ where: { id: req.body.planId, userId: req.user.id } });

  if (!plan) {
    res.status(404);
    throw new Error('Plan not found for this user');
  }

  const reminder = await Reminder.create(req.body);
  res.status(201).json(reminder);
});

module.exports = {
  getReminders,
  createReminder,
};
