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

export const updateLocation = (address) => ({
  type: types.UPDATE_LOCATION,
  payload: { address },
})

export const getMidpoint = (userCoords, friendCoords) => {
  console.log("*****", userCoords)
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



// export const deleteCard = id => (dispatch, getState) => {
//   if (getState().markets.marketList[id].cards > 0) {
//     dispatch({ type: types.DELETE_CARD, payload: id });
//   }
// };




// export const buyStock = () => (dispatch, getState) => {
//   // grab the symbol from state
//   const sym = getState().stocks.searchBar;
//   const user_id = getState().stocks.user_id;
//   // hit API to get current price of stock
//   const options = {
//     method: 'POST',
//     url: '/transaction',
//     data: {user_id},
//     params: {region: 'US', symbols: sym}
//   }
//   // make a post to the stocks database adding the stock name and current price
//   // make a post to the transactions database with the current user and the stock ID and time, sold price/sold time null
//   axios.request(options).then((response) => {
//     if(response.status = 201) dispatch({
//       type: types.BUY_STOCK,
//       payload: response.data,
//     });
//   }).catch(console.error);
//   // hit reducer to update state with the new query of all transactions...
// };