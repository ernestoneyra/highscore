const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:secretpassword@localhost:5432/highscore');

class Games extends Model {}

Games.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
   release_year: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'games',
    timestamps: false
});

module.exports = Games;