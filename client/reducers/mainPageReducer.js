import * as types from '../constants/actionTypes';
import axios from 'axios';
import { updateLocation } from '../actions/actions';


const initialState = {
  pageToDisplay: 'login',
  currentUserID: '',
  loggedIn: false,
  selfInfo: { avatar: 'https://www.mindenpictures.com/cache/pcache2/90392052.jpg', name: 'Wunderpus Photogenicus', address: { lat: 40, lng: -74 } },
  selectedUsersList: [],
  allUsersList: [],
  midpoint: { lat: 40.7142700, lng: -74.0059700 },
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PAGE_TO_SIGN_UP:
      return {
        ...state,
        pageToDisplay: 'signup',
      };

    case types.SIGN_UP_CANCEL:
      return {
        ...state,
        pageToDisplay: 'login',
      };

    case types.LOG_IN:
      if (action.payload.verified) {
        const tempObj = { ...state.selfInfo };
        tempObj.name = action.payload.user.username;
        tempObj.address = { lat: Number(action.payload.user.coordinates.lat), lng: Number(action.payload.user.coordinates.lng) }

        return {
          ...state,
          currentUserID: action.payload.user.user_id,
          selfInfo: tempObj,
          selectedUsersList: action.payload.selectedUserList,
          allUsersList: action.payload.allUsersList,
          loggedIn: true,
        };
      }

    case types.SIGN_UP_USER:

      if (action.payload.verified === true) {
        const tempObj = { ...state.selfInfo };
        tempObj.name = action.payload.user.username;
        tempObj.address = `{lat: ${action.payload.user.coordinates.lat}, lng: ${action.payload.user.coordinates.lng}}`;

        return {
          ...state,
          currentUserID: action.payload.user.user_id,
          selfInfo: tempObj,
          loggedIn: false,
          pageToDisplay: 'login',
        };
      }
      return {
        ...state,
        pageToDisplay: 'signup',
      };


    case types.UPDATE_LOCATION:
      const tempObj = { ...state.selfInfo };
      tempObj.address = { lat: Number(action.payload.coordinates.lat), lng: Number(action.payload.coordinates.lng) }
      return {
        ...state,
        selfInfo: tempObj,
      }

    case types.GET_MIDPOINT:
      return {
        ...state,
        midpoint: action.payload
      }


    case types.ADD_USER:
      return {
        ...state,
        selectedUsersList: action.payload.selectedUserList,
        allUsersList: action.payload.allUsersList,
      }
    //add deselect user reducer
    case types.DESELECT_USER:
      //return updated selected
      return {
        ...state,
        selectedUsersList: action.payload.selectedUserList,
        allUsersList: action.payload.allUsersList,
      }

    default:
      return state;
  }
};

export default mainPageReducer;