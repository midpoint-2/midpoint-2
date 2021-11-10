import React, { useState } from 'react';

const Sidebar = (props) => {

  const [address, setAddress] = useState('');

  function onChangeHandler(event) {
    const { name, value } = event.currentTarget;
    if (name === "address") {
      setAddress(value);
    }
  }

  const imgUrl = 'https://i.imgur.com/WTHBUgm.png';

  return (
    <div id="sidebar" className='sidebarStyles'>
      <div id="user-info" style={{ borderBottom: '4px solid black' }}>
        <div className='flexAlignCenter'>

          {/* shows avatar photo and user greeting */}
          <img src={props.avatar} className='avatar' />
          <p className='p1Styles'>Welcome back, {props.name}!</p>

        </div>
        <div className='flexAlignCenter'>

          {/* shows location icon and user location */}
          <img src={imgUrl} className='marker' />
          <p className='p2Styles'>{JSON.stringify(props.address)}</p>

        </div>
        <div className='center'>

          {/* input field where users can elect to update their current location */}
          <input className='inputStyles'
            name="address" type="text"
            placeholder="Address"
            value={address}
            onChange={(event) => onChangeHandler(event)}>
          </input>

          <button onClick={() => props.updateLocation(address)}>
            Update
          </button>
        </div>
      </div>
      <div id="meeting-user-list" className='center' >
        <p>To Meet</p>
        {/* dropdown populated with users from friends list */}
        {console.log('Props friends list', props.selectedUsersList)} {/* array of objects with user_id, username, and coordinates properties*/}


        <div className='inputStyles' style={{ borderBottom: '4px solid black' }}>
          {props.selectedUsersList.map((friend) => {
            return (<div id={friend.user_id} key={friend.user_id} value={friend.username}>
              {friend.username}</div>
            )
          }
          )}
          <p></p>
          <button onClick={() => props.getMidpoint(props.address, props.selectedUsersList)}>
            Meet in the Middle
          </button>
          <p></p>
        </div>
        {/* when clicked, triggers action to get that friend's location and use it to find the midpoint */}
      </div>
      {/* eventual functionality to add a friend to user's friend list by name search */}
      <div id="all-user-list" className='inputStyles' className='center'>
        <p>All Users</p>
        {props.allUsersList.map((allUser, i) => {
          return (<div id={allUser.user_id} key={allUser.user_id} value={allUser.username}>
            <button onClick={() => props.addUser(props.currentUserID, allUser.user_id)}>
              Add
            </button> {allUser.username} </div>)
        })}


      </div>
    </div>
  )
}





export default Sidebar;