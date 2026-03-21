const asyncHandler = require('../utils/asyncHandler');

const KNOWN_INTERACTIONS = [
  {
    medicineA: 'Atorvastatin',
    medicineB: 'Clarithromycin',
    severity: 'High',
    note: 'Risk of elevated statin concentration. Use alternative where possible.',
  },
  {
    medicineA: 'Warfarin',
    medicineB: 'Aspirin',
    severity: 'Moderate',
    note: 'Increased bleeding risk. Closely monitor INR and signs of bleeding.',
  },
  {
    medicineA: 'Metformin',
    medicineB: 'Cimetidine',
    severity: 'Moderate',
    note: 'May reduce metformin clearance and increase side effects.',
  },
];

const checkInteractions = asyncHandler(async (req, res) => {
  const { medicines = [] } = req.body;

  const normalized = medicines.map((item) => item.toLowerCase());

  const matches = KNOWN_INTERACTIONS.filter((item) => {
    return (
      normalized.includes(item.medicineA.toLowerCase()) &&
      normalized.includes(item.medicineB.toLowerCase())
    );
  });

  res.json({
    checkedCount: medicines.length,
    interactions: matches,
  });
});

module.exports = {
  checkInteractions,
};
