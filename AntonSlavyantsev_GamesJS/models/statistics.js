const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Statistics = db.define('Statistics', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  timesListed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numberOfReviews: {
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
  tableName: 'statistics',
  timestamps: false,
});

module.exports = Statistics;
