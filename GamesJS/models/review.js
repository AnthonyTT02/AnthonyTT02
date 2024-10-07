const db = require('../config/database');
const { DataTypes } = require('sequelize');

const Review = db.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  review_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

module.exports = Review;
