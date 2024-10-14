const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Film = sequelize.define('Film', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'genres', 
      key: 'id'
    }
  },
  directorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'directors', 
      key: 'id'
    }
  }
}, {
  timestamps: true 
});

module.exports = Film;
