const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:secretpassword@localhost:5432/highscore');

class Scores extends Model {}

Scores.init({
    game: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
   highscore: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    url_slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'scores',
    timestamps: false
});

module.exports = Scores;