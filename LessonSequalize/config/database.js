const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movies_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
