const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:secretpassword@localhost:5432/highscore');

class Genre extends Model {}

Genre.init({
    
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    sequelize,
    tableName: 'genre',
    timestamps: false
});

module.exports = Genre;

