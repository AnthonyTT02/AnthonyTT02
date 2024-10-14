const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Actor = sequelize.define('Actor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false 
});

module.exports = Actor;
