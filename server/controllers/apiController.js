const axios = require('axios');

const apiController = {};

apiController.getPlaces = async (res, req, next) => {
  const { midpoint, radius, interest, maxPrice } = req.query;
  console.log('this is the req query:', req.query);
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${midpoint.lat}%2C${midpoint.lng}&radius=${radius}&keyword=${interest}&price=${maxPrice}&key=AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI`;
  const request = {
    method: 'GET',
    url: url,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credential' : true,
    },
  };
  try {
    const response = await axios.request(request);
    console.log('this is the axios response:', response)
    res.locals = response;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = apiController;