const { Sequelize } = require('sequelize');

require('dotenv').config();

const configOptions = {
    dialect: 'postgres',
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    }
};

const sequelize = new Sequelize(process.env.DATABASE_URL, configOptions);

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
}

sequelize.checkConnection = checkConnection;

module.exports = sequelize;
