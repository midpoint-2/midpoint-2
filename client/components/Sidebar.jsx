import React, { useState } from 'react';

const Sidebar = (props) => {

  const [address, setAddress] = useState('');

  function onChangeHandler(event) {
    const { name, value } = event.currentTarget;
    if (name === "address") {
      setAddress(value);
    }
  }

  const imgUrl = 'https://i40mc.de/wp-content/uploads/sites/22/2021/02/Icon-Roadmap.png';

  return (
    <div id="sidebar" className='sidebar'>
      <div id="user-info" style={{ borderBottom: '3px solid black' }}>
        <div className='profile'>

          {/* shows avatar photo and user greeting */}
          <img src={props.avatar} className='avatar' />
          <p className='p1'>Welcome back, {props.name}!</p>

        </div>
        <div className='user-location'>

          {/* shows location icon and user location */}
          <img src={imgUrl} className='marker' />
          <p className='p2'>Current location: </p>
          <p className='p2'>{props.address.lat}, {props.address.lng}</p>
          {/* <button onClick={() => console.log(props.address)}></button> */}
        </div>
        <div className='update-location'>

          {/* input field where users can elect to update their current location */}
          <input className='inputStyles'
            name="address" type="text"
            placeholder="Address"
            value={address}
            onChange={(event) => onChangeHandler(event)}>
          </input>
          <button onClick={() => props.updateLocation(props.currentUserID, address)}>
            Update
          </button>
        </div>
      </div>
      <div id="meeting-user-list" className='meeting-user-list' >
        <p className='p2'>MEET UP WITH: </p>
        {/* dropdown populated with users from friends list */}
        {console.log('Props friends list', props.selectedUsersList)} {/* array of objects with user_id, username, and coordinates properties*/}


        <div className='meet-delete' style={{ borderBottom: '3px solid black' }}>
          {props.selectedUsersList.map((friend) => {
            return (<div id={friend.user_id} key={friend.user_id} value={friend.username}>
              <button onClick={() => props.deselectFriend(props.currentUserID, friend.user_id)}>{friend.username}</button></div>
            )
          }
          )}
          
          <button onClick={() => props.getMidpoint(props.address, props.selectedUsersList)}>
            FIND MIDPOINT
          </button>
          <p></p>
        </div>
        {/* when clicked, triggers action to get that friend's location and use it to find the midpoint */}
      </div>
      {/* eventual functionality to add a friend to user's friend list by name search */}
      <div id="all-user-list" className='all-user-list'>
        <p className='p2'>ADD USERS: </p>
        {props.allUsersList.map((allUser, i) => {
          return (<div id={allUser.user_id} key={allUser.user_id} value={allUser.username}>
            <button onClick={() => props.addUser(props.currentUserID, allUser.user_id)}>
            {allUser.username}
            </button></div>)
        })}


      </div>
    </div>
  )
}

export default Sidebar;