const Store = require('../models/store');

// Get all stores
const getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll(); // Use findAll() to get all stores
    res.json(stores);
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new store
const addStore = async (req, res) => {
  try {
    const store = await Store.create(req.body);  // Use create() instead of new Store()
    res.status(201).json(store);
  } catch (error) {
    console.error('Error adding store:', error);
    res.status(400).json({ error: 'Invalid data' });
  }
};

module.exports = { getAllStores, addStore };
