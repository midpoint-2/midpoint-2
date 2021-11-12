const express = require('express');
const dbController = require('../controllers/databaseController');
const router = express.Router();

// get/verify current  user
router.get('/login', dbController.verifyUser, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  return res.status(200).json(res.locals);
});

// post/create a new user (encrypt password)
router.post('/signup', dbController.signUpUser, (req, res) => {
  return res.status(201).json(res.locals);
});

router.post('/addUser', dbController.addUser, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  return res.status(201).json(res.locals);
});

router.delete('/deselectFriend', dbController.deselectFriend, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  return res.status(201).json(res.locals);
});

router.put('/updateLocation', dbController.updateLocation, (req, res) => {
  return res.status(201).json(res.locals.user);
})

router.get('/coordinates', dbController.getCoords, (req, res) => {
  return res.status(200).json(res.locals.coords);
});

module.exports = router;