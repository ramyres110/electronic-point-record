const { Sequelize } = require('sequelize');

const username = 'postgres';
const password = 'postgres';
const host = 'localhost';
const port = '5432'
const database = 'database'

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

module.exports = sequelize;
