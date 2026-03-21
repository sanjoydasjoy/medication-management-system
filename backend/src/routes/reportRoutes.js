const express = require('express');
const { getSummaryReport } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.get('/summary', getSummaryReport);

module.exports = router;
