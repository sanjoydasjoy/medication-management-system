const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicine = sequelize.define(
  'Medicine',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genericName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dosageForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    refillThreshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    sideEffects: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const raw = this.getDataValue('sideEffects');
        return raw ? JSON.parse(raw) : [];
      },
      set(value) {
        this.setDataValue('sideEffects', JSON.stringify(value || []));
      },
    },
  },
  {
    tableName: 'medicines',
  },
);

module.exports = Medicine;
