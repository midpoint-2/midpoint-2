const axios = require('axios');

const apiController = {};

apiController.getPlaces = async (req, res, next) => {
  const { midpoint, interest, maxPrice, radius } = req.query;
  // console.log('this is the req query:', req.query);
  const mid = JSON.parse(midpoint)
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${mid.lat}%2C${mid.lng}&radius=${radius}&keyword=${interest}&price=${maxPrice}&key=AIzaSyBJxF1BhB_ITohgRDtOc2AUErTYRcYkEjU`;
  const request = {
    method: 'GET',
    url: url,

  };
  try {
    const response = await axios.request(request);
    res.locals = response.data;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = apiController;