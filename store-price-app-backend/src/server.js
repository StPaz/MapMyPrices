const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to Database and Start Server
(async () => {
  await sequelize.authenticate(); // Only for MongoDB; for PostgreSQL, use Sequelize's `authenticate()`.
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();