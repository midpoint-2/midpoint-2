import * as types from '../constants/actionTypes';
import axios from 'axios';

export const logIn = (username, password) => (dispatch) => {
  const request = {
    method: 'GET',
    url: '/database/login',
    params: { username, password }
  }

  axios.request(request).then((response) => {
    if (response.status = 201) dispatch({
      type: types.LOG_IN,
      payload: response.data, //will hold the user object
    });
  }).catch(console.error);
};

export const pageToSignup = () => ({
  type: types.PAGE_TO_SIGN_UP,
});

export const signUpUser = (username, password, address) => (dispatch) => {
  // const coordinates = {lat, lng}  

  const request = {
    method: 'POST',
    url: '/database/signup',
    data: { username, password, address }
  }

  axios.request(request).then((response) => {
    if (response.status = 201) dispatch({
      type: types.SIGN_UP_USER,
      payload: response.data,
    });
  }).catch(console.error);
};


export const signUpCancel = () => ({
  type: types.SIGN_UP_CANCEL,
});

export const updateLocation = (user_id, address) => (dispatch) => {
  const request = {
    method: 'PUT',
    url: 'database/updateLocation',
    data: { user_id, address }
  }

  axios.request(request).then((response) => {
    if (response.status = 201) dispatch({
      type: types.UPDATE_LOCATION,
      payload: response.data,
    });
  }).catch(console.error);
}


export const getMidpoint = (userCoords, friendCoords) => {
  // iterate over friendCoord, get array of lang, lat and 
  const coordArr = [];
  let xSum = userCoords.lat
  let ySum = userCoords.lng
  for (let i = 0; i < friendCoords.length; i++) {
    xSum += friendCoords[i].coordinates.lat
    ySum += friendCoords[i].coordinates.lng
  }
  const lat = xSum / (friendCoords.length + 1)
  const lng = ySum / (friendCoords.length + 1)

  return ({
    type: types.GET_MIDPOINT,
    payload: { 'lat': lat, 'lng': lng }
  })
}

export const addUser = (user1_id, user2_id) => (dispatch) => {
  const request = {
    method: 'POST',
    url: 'database/addUser',
    data: { user1_id, user2_id }
  }

  axios.request(request).then((response) => {
    if (response.status = 201) dispatch({
      type: types.ADD_USER,
      payload: response.data,
    });
  }).catch(console.error);
}

export const deselectFriend = (user1_id, user2_id) => (dispatch) => {
  const request = {
    method: 'DELETE',
    url: 'database/deselectFriend',
    data: { user1_id, user2_id }
  }

  axios.request(request).then((response) => {
    if (response.status = 201) dispatch({
      type: types.DESELECT_USER,
      payload: response.data,
    });
  }).catch(console.error)
}

// RADIUS IS IN METERS
export const getPlaces = (midpoint, interest, maxPrice, radius) => (dispatch) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${midpoint.lat}%2C${midpoint.lng}&radius=${radius}&keyword=${interest}&price=${maxPrice}&key=AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI`;
  
  const request = {
    method: 'GET',
    url: url,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credential' : true,
    },
  };

  axios.request(request).then((response) => {
    console.log(response.data)
    dispatch({
    type: types.GET_PLACES,
    payload: JSON.stringify(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  })
}