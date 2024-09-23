const db = require('../config/database');
const { Sequelize } = require('sequelize');

const Genre = db.define('genre', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = Genre;
