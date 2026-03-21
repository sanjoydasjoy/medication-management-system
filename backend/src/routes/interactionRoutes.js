const express = require('express');
const { body } = require('express-validator');
const { checkInteractions } = require('../controllers/interactionController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.use(protect);
router.post('/', body('medicines').isArray({ min: 2 }), validateRequest, checkInteractions);

module.exports = router;
