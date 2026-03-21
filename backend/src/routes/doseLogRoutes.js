const express = require('express');
const { body } = require('express-validator');
const { createDoseLog, getDoseLogs } = require('../controllers/doseLogController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);

router.get('/', getDoseLogs);
router.post(
  '/',
  body('planId').isInt(),
  body('plannedAt').notEmpty(),
  body('status').isIn(['Taken', 'Missed', 'Skipped']),
  validateRequest,
  createDoseLog,
);

module.exports = router;
