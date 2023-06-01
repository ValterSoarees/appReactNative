const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Livro = db.define('Livro',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    imagem:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    editora: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    paginas:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    }
},{
    tableName:'livro'
});


module.exports = Livro;