const express = require('express');
const { body } = require('express-validator');
const { createReminder, getReminders } = require('../controllers/reminderController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);

router.get('/', getReminders);
router.post(
  '/',
  body('planId').isInt(),
  body('channel').isIn(['Email', 'Push', 'SMS']),
  body('remindAt').notEmpty(),
  validateRequest,
  createReminder,
);

module.exports = router;
