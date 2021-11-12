const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/getPlaces', apiController.getPlaces, (req, res) => {
  return res.status(200).json(res.locals);
})

module.exports = router;