const Sequelize = require('sequelize');

const sequelize = new Sequelize('medication', 'sj', 'sj_11', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
