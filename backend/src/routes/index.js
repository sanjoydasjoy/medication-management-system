const express = require('express');
const authRoutes = require('./authRoutes');
const medicineRoutes = require('./medicineRoutes');
const planRoutes = require('./planRoutes');
const doseLogRoutes = require('./doseLogRoutes');
const reminderRoutes = require('./reminderRoutes');
const doctorRoutes = require('./doctorRoutes');
const reportRoutes = require('./reportRoutes');
const interactionRoutes = require('./interactionRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/medicines', medicineRoutes);
router.use('/plans', planRoutes);
router.use('/dose-logs', doseLogRoutes);
router.use('/reminders', reminderRoutes);
router.use('/doctors', doctorRoutes);
router.use('/reports', reportRoutes);
router.use('/interactions', interactionRoutes);

module.exports = router;
