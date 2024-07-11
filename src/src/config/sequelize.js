const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  dialectOptions: {
    connectTimeout: 20000
  },
  logging: console.log
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Synchronize models with the database (create tables if they don't exist)
sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch(err => {
    console.error('Unable to synchronize models with the database:', err);
  });

module.exports = sequelize;
