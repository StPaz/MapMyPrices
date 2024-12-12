require('dotenv').config(); // Load environment variables

const { Sequelize } = require('sequelize');

// Sequelize PostgreSQL configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

// Sync models with the database (create tables if they don't exist)
sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));

module.exports = sequelize;
