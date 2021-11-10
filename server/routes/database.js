const express = require('express');
const dbController = require('../controllers/databaseController');
const router = express.Router();

// get/verify current  user
router.get('/login', dbController.verifyUser, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  // status
  // verified
  // message
  // user
  // friends
  return res.json(res.locals);
});

// post/create a new user (encrypt password)
router.post('/signup', dbController.addUser, (req, res) => {
  return res.status(201).json(res.locals);
});

// put/update current user's data (location, interests)
// router.put('/', dbController.updateUser, (req, res) => {
//   return res.status(201).json(res.locals.user);
// })

router.post('/addUser', dbController.addUser, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  return res.status(201).json(res.locals);
})

router.delete('/deletefriend', dbController.deselectFriend, dbController.getMeetingList, dbController.getUsersList, (req, res) => {
  return res.status(201).json(res.locals);
})

router.get('/coordinates', dbController.getCoords, (req, res) => {
  return res.status(200).json(res.locals.coords);
})

// TODOS //

// add/get/post user to friend list

// delete/remove user from friend list

// ???? post to friends table with user1_id: current user, user2_id, selected user

// TODO! add friends, delete friends

module.exports = router;