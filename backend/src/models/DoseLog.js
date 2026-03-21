const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DoseLog = sequelize.define(
  'DoseLog',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    plannedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    takenAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Taken', 'Missed', 'Skipped'),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'dose_logs',
  },
);

module.exports = DoseLog;
