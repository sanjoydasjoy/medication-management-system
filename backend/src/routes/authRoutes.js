const express = require('express');
const { body } = require('express-validator');
const { login, me, register } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.post(
  '/register',
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  validateRequest,
  register,
);

router.post('/login', body('email').isEmail(), body('password').notEmpty(), validateRequest, login);
router.get('/me', protect, me);

module.exports = router;
