const sequelize = require('../config/database');
const User = require('./User');
const Medicine = require('./Medicine');
const MedicationPlan = require('./MedicationPlan');
const DoseLog = require('./DoseLog');
const Reminder = require('./Reminder');
const Doctor = require('./Doctor');

User.hasMany(MedicationPlan, { foreignKey: 'userId' });
MedicationPlan.belongsTo(User, { foreignKey: 'userId' });

Medicine.hasMany(MedicationPlan, { foreignKey: 'medicineId' });
MedicationPlan.belongsTo(Medicine, { foreignKey: 'medicineId' });

MedicationPlan.hasMany(DoseLog, { foreignKey: 'planId' });
DoseLog.belongsTo(MedicationPlan, { foreignKey: 'planId' });

MedicationPlan.hasMany(Reminder, { foreignKey: 'planId' });
Reminder.belongsTo(MedicationPlan, { foreignKey: 'planId' });

module.exports = {
  sequelize,
  User,
  Medicine,
  MedicationPlan,
  DoseLog,
  Reminder,
  Doctor,
};
