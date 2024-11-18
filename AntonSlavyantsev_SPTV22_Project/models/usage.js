const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Usage = sequelize.define('Usage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    licenseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Licenses', 
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', 
            key: 'id',
        },
    },
    usageCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    timestamps: true,
});

module.exports = Usage;
