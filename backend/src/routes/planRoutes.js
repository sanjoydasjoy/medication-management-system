const express = require('express');
const { body } = require('express-validator');
const { createPlan, deletePlan, getPlans, updatePlan } = require('../controllers/planController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);

router.get('/', getPlans);
router.post(
  '/',
  body('medicineId').isInt(),
  body('dosage').notEmpty(),
  body('frequency').notEmpty(),
  body('nextDoseAt').notEmpty(),
  body('durationDays').isInt({ min: 1 }),
  body('startDate').notEmpty(),
  body('endDate').notEmpty(),
  validateRequest,
  createPlan,
);
router.put('/:id', updatePlan);
router.delete('/:id', deletePlan);

module.exports = router;
