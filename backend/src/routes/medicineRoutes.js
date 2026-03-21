const express = require('express');
const { body } = require('express-validator');
const {
  createMedicine,
  deleteMedicine,
  getMedicineById,
  getMedicines,
  updateMedicine,
} = require('../controllers/medicineController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);

router.get('/', getMedicines);
router.get('/:id', getMedicineById);
router.post(
  '/',
  body('name').notEmpty(),
  body('genericName').notEmpty(),
  body('category').notEmpty(),
  body('dosageForm').notEmpty(),
  body('strength').notEmpty(),
  validateRequest,
  createMedicine,
);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);

module.exports = router;
