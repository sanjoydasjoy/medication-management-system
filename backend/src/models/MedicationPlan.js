const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MedicationPlan = sequelize.define(
  'MedicationPlan',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dosage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nextDoseAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    durationDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: 'medication_plans',
  },
);

module.exports = MedicationPlan;
