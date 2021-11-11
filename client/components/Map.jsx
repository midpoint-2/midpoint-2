import React from 'react';
import GoogleMapReact from 'google-map-react';

const imgUrl = 'https://i.imgur.com/WTHBUgm.png';
const Marker = ({ icon }) => <img className="marker" src={imgUrl}></img>;

const Map = (props) => {
  return (

    <div className='mapContainer'>
      {console.log('we are in maps', props.midpoint.lat, props.midpoint.lng)}
      {console.log('is middle point an object', props.midpoint)}


      <div id="map-container" className='mapStyles'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAG8pD29eYb7EnZNrNFinFbmMtJiqqnzKI' }}
          defaultCenter={props.midpoint}
          center={props.midpoint}
          defaultZoom={12}>
          {/* do markers go in here? */}
          <Marker lat={props.midpoint.lat} lng={props.midpoint.lng} text='midpoint' />
          {props.places.length > 0 && <Marker lat={props.places[0].geometry.location.lat} lng={props.places[0].geometry.location.lng} text='marker' />}
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default Map;