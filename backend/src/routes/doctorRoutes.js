const express = require('express');
const { body } = require('express-validator');
const { createDoctor, getDoctors } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);

router.get('/', getDoctors);
router.post(
  '/',
  body('fullName').notEmpty(),
  body('speciality').notEmpty(),
  body('hospital').notEmpty(),
  validateRequest,
  createDoctor,
);

module.exports = router;
