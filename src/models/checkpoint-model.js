const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../configs/sequelize-config');

const CheckpointModel = sequelize.define('checkpoint',
    {
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        type: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },
    {
        timestamps: true,
    }
);

module.exports = CheckpointModel;