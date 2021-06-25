const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:secretpassword@localhost:5432/highscore');


class Player extends Model {}

Player.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    sequelize,
    tableName: 'player',
    timestamps: false // createdAt, updatedAt
});

module.exports = Player;

/* score: {
    type: DataTypes. NUMBER,
    allowNull: false
}, 
game: {
        type: DataTypes.STRING,
        allowNull: false
    }*/