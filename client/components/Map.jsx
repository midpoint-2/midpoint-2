import React from 'react';
import GoogleMapReact from 'google-map-react';

const imgUrl = 'https://i.imgur.com/WTHBUgm.png';
const Marker = ({ icon }) => <img className="marker"height={'100px'} width={'100px'} src={imgUrl}></img>;

const Map = ({ midpoint }) => {
  return (

    <div className='mapContainer'>
      {console.log('we are in maps', midpoint.lat, midpoint.lng)}
      {console.log('is middle point an object', midpoint)}


      <div id="map-container" className='mapStyles'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI' }}
          defaultCenter={midpoint}
          center={midpoint}
          defaultZoom={12}>
          {/* do markers go in here? */}
          <Marker lat={midpoint.lat} lng={midpoint.lng} text='midpoint' />
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default Map;