const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reminder = sequelize.define(
  'Reminder',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    channel: {
      type: DataTypes.ENUM('Email', 'Push', 'SMS'),
      allowNull: false,
      defaultValue: 'Email',
    },
    remindAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'reminders',
  },
);

module.exports = Reminder;
