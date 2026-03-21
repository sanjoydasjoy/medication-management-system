const { DoseLog, MedicationPlan, Medicine } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const getSummaryReport = asyncHandler(async (req, res) => {
  const plans = await MedicationPlan.count({ where: { userId: req.user.id } });

  const logs = await DoseLog.findAll({
    include: [{ model: MedicationPlan, where: { userId: req.user.id } }],
  });

  const total = logs.length;
  const taken = logs.filter((log) => log.status === 'Taken').length;
  const missed = logs.filter((log) => log.status === 'Missed').length;
  const skipped = logs.filter((log) => log.status === 'Skipped').length;
  const adherence = total ? Math.round((taken / total) * 100) : 0;

  const lowStock = await Medicine.count({
    where: {
      stock: { [require('sequelize').Op.lte]: require('sequelize').col('refillThreshold') },
    },
  });

  res.json({
    activePlans: plans,
    totalDoses: total,
    taken,
    missed,
    skipped,
    adherence,
    lowStock,
  });
});

module.exports = { getSummaryReport };
