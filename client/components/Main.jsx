import React from 'react';
import Map from './Map'
import Sidebar from './Sidebar'
import Interests from './Interests'
import Places from './Places'

const Main = (props) => {
    return(
      <div id="main-content" className='mainStyles'>
        <Sidebar {...props}/>
        <div className="main-container">
        <Map {...props}/>
        <div className="main-flex">
          <Interests {...props}/>
          
        </div>
        </div>
        <Places {...props}/>
      </div>
    )
}

export default Main;