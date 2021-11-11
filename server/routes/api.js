const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api', apiController.getPlaces, (req, res) => {
  return res.status(200).res.json(res.locals);
})

module.exports = router; 