const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:secretpassword@localhost:5432/highscore');


class Players extends Model {}

Players.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    sequelize,
    tableName: 'players',
    timestamps: false // createdAt, updatedAt
});

module.exports = Players;
