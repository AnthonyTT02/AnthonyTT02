const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
