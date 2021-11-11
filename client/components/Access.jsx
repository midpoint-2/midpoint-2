import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Main from './Main';
import Places from './Places';


const mapStateToProps = ({
  mainPage: { currentUserID, pageToDisplay, loggedIn, selfInfo, selectedUsersList, allUsersList, midpoint }
}) => ({
  pageToDisplay,
  loggedIn,
  selfInfo,
  selectedUsersList,
  allUsersList,
  midpoint,
  currentUserID,
});

const mapDispatchToProps = dispatch => ({
  pageToSignup: () => dispatch(actions.pageToSignup()),
  signUpCancel: () => dispatch(actions.signUpCancel()),
  logIn: (user, pass) => dispatch(actions.logIn(user, pass)),
  signUpUser: (user, pass, address) => dispatch(actions.signUpUser(user, pass, address)),
  updateLocation: (user, address) => dispatch(actions.updateLocation(user, address)),
  getMidpoint: (user, friendUser) => dispatch(actions.getMidpoint(user, friendUser)),
  addUser: (user1_id, user2_id) => dispatch(actions.addUser(user1_id, user2_id)),
  deselectFriend: (user1_id, user2_id) => dispatch(actions.deselectFriend(user1_id, user2_id)),
  getPlaces: (midpoint, interest, maxPrice, radius) => dispatch(actions.getPlaces(midpoint, interest, maxPrice, radius))
});


const Access = ({ pageToDisplay, currentUserID, addUser, deselectFriend, loggedIn, pageToSignup, signUpCancel, logIn, signUpUser, selfInfo, updateLocation, selectedUsersList, allUsersList, getMidpoint, midpoint, getPlaces}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  function onChangeHandler(event) {
    const { name, value } = event.currentTarget;
    if (name === "username") {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'address') {
      setAddress(value);
    }
  }

  if (loggedIn) {
    return (<Main {...selfInfo} updateLocation={updateLocation} selectedUsersList={selectedUsersList} allUsersList={allUsersList} getMidpoint={getMidpoint} currentUserID={currentUserID} addUser={addUser} deselectFriend={deselectFriend} midpoint={midpoint} getPlaces={getPlaces} />)
  }

  // Log In Page
  if (pageToDisplay === 'login') return (
    <div className='loginStyles'>

      <h1>MidPoint</h1>
      <img src='https://i40mc.de/wp-content/uploads/sites/22/2021/02/Icon-Roadmap.png'/>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => onChangeHandler(event)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => onChangeHandler(event)}
      />
      <button onClick={() => logIn(username, password)}>Log in</button>
      <button onClick={pageToSignup}>Sign up</button>

    </div>
  );



  // Sign Up Page
  return (
    <div className='loginStyles'>

      <h1>MidPoint</h1>
      <img src='https://i40mc.de/wp-content/uploads/sites/22/2021/02/Icon-Roadmap.png'/>

      <input name="username" id="username" value={username} type="text" placeholder="Username" onChange={(event) => onChangeHandler(event)}></input>
      <input name="password" id="password" value={password} type="password" placeholder="Password" onChange={(event) => onChangeHandler(event)}></input>
      <input name="address" id="address" value={address} type="text" placeholder="Address" onChange={(event) => onChangeHandler(event)}></input>

      <button onClick={() => { if ((username || password || address) !== '') signUpUser(username, password, address) }}>Submit</button>
      <button onClick={signUpCancel}>Cancel</button>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(Access);