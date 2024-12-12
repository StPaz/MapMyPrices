// models/store.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import your sequelize instance

// Define the Store model
const Store = sequelize.define('Store', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Store;
