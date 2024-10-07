const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Genre = db.define('Genre', {
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
  tableName: 'genres',
  timestamps: false,
});

module.exports = Genre;
