const express = require('express');
const { getAllStores, addStore } = require('../controllers/storeController');
const router = express.Router();

router.get('/', getAllStores);
router.post('/', addStore);

module.exports = router;