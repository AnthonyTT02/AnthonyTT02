const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Developer = db.define('Developer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'developers',
  timestamps: false,
});

module.exports = Developer;
