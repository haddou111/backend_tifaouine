const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Domaine = sequelize.define('Domaine', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING(120),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'domaine',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Domaine;