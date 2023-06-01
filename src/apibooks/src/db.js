const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('projeto-app', 'root', '123456', {
    dialect: 'mysql', host: 'localhost'
});

//const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize;