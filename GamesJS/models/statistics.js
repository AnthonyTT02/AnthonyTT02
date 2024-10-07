const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Statistics = db.define('UserStatistics', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plays: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  playing: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  backlogs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wishlist: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'user_statistics',
  timestamps: false,
});

module.exports = Statistics;
