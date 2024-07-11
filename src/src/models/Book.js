const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other fields as necessary
}, {
  timestamps: true,
});

module.exports = Book;
