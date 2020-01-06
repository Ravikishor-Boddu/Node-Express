const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','hbstudent','hbstudent',{
    dialect: 'mysql',
    host:'localhost'
});

module.exports = sequelize;