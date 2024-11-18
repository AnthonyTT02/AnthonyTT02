const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const License = sequelize.define('License', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'expired'),
        defaultValue: 'inactive',
    },
}, {
    timestamps: true,
});

module.exports = License;
