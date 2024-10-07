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
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  times_listed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  number_of_reviews: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reviews_text: {
    type: DataTypes.TEXT,
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
  developer_team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'games',
  timestamps: false,
});

module.exports = Game;
