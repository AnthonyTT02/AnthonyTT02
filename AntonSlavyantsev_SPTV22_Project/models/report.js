const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', 
            key: 'id',
        },
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    generatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
});

module.exports = Report;
