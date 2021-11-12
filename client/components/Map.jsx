import React from 'react';
import GoogleMapReact from 'google-map-react';

const imgUrl = 'https://cdn-icons-png.flaticon.com/512/149/149059.png';
const imgUrl2 = 'https://i.ibb.co/sjtj5wc/marker1.png';
const imgUrl3 = 'https://i.ibb.co/n3KS7Rd/marker2.png';
const imgUrl4 = 'https://i.ibb.co/VYB4SJv/marker3.png';
const MidpointMarker = ({ icon }) => <img className="pin" src={imgUrl}></img>;
const PlaceMarker1 = ({ icon }) => <img className="marker" src={imgUrl2}></img>;
const PlaceMarker2 = ({ icon }) => <img className="marker" src={imgUrl3}></img>;
const PlaceMarker3 = ({ icon }) => <img className="marker" src={imgUrl4}></img>;


const Map = (props) => {
  return (

    <div className='mapContainer'>
      {console.log('we are in maps', props.midpoint.lat, props.midpoint.lng)}
      {console.log('is middle point an object', props.midpoint)}


      <div id="map-container" className='mapStyles'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR API KEY HERE' }}
          defaultCenter={props.midpoint}
          center={props.midpoint}
          defaultZoom={12}>
          {/* do markers go in here? */}
          <MidpointMarker lat={props.midpoint.lat} lng={props.midpoint.lng} text='midpoint' />
          {props.places.length > 0 && <PlaceMarker1 lat={props.places[0].geometry.location.lat} lng={props.places[0].geometry.location.lng} text='marker' />}
          {props.places.length > 0 && <PlaceMarker2 lat={props.places[1].geometry.location.lat} lng={props.places[1].geometry.location.lng} text='marker' />}
          {props.places.length > 0 && <PlaceMarker3 lat={props.places[2].geometry.location.lat} lng={props.places[2].geometry.location.lng} text='marker' />}
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default Map;