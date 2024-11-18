const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games_db', 'root', '', {
  host: 'localhost',
  port: 8000,
  dialect: 'mysql',
  logging: false,

});

module.exports = sequelize;
