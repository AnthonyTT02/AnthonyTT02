const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Game = db.define('Game', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'games',
  timestamps: false,
});

module.exports = Game;
