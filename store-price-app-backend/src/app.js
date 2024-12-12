const express = require('express');
const cors = require('cors');
require('dotenv').config();
const storeController = require('./controllers/storeController'); // Import storeController

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Store Price App API is running!');
});

// Fetch stores from the database
app.get('/api/stores', storeController.getAllStores);

app.post('/api/stores', storeController.addStore);

module.exports = app;
