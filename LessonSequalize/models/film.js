const db = require('../config/database');
const { Sequelize } = require('sequelize');

const Film = db.define('film', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    releaseYear: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = Film;
