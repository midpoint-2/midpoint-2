import React from 'react';

const Places = (props) => {

    console.log(props.places)
    return (
        <React.Fragment>
            <div className="sidebar">
            <div className="places-wrapper">
                <div className="places-info">
                    <div className="place-name1">Name: {props.places.length > 0 && props.places[0].name}</div>
                    <div className="place-hours">{props.places.length > 0 && (props.places[0].opening_hours.open_now ? "OPEN NOW" : "CLOSED")}</div>
                    <div className="place-address">Address: {props.places.length > 0 && props.places[0].vicinity}</div>
                    <div className="place-rating">Rating: {props.places.length > 0 && props.places[0].rating}</div>
                </div>
            </div>
                <div style={{ borderTop: '3px solid black'}}></div>
            <div className="places-wrapper">
                <div className="places-info" ><p></p><p></p>
                    <div className="place-name2">Name: {props.places.length > 0 && props.places[1].name}</div>
                    <div className="place-hours">{props.places.length > 0 && (props.places[1].opening_hours.open_now ? "OPEN NOW" : "CLOSED")}</div>
                    <div className="place-address">Address: {props.places.length > 0 && props.places[1].vicinity}</div>
                    <div className="place-rating">Rating: {props.places.length > 0 && props.places[1].rating}</div>
                </div>
            </div>
                <div style={{ borderTop: '3px solid black'}}></div>
            <div className="places-wrapper">
                <div className="places-info" ><p></p><p></p>
                    <div className="place-name3">Name: {props.places.length > 0 && props.places[2].name}</div>
                    <div className="place-hours">{props.places.length > 0 && (props.places[2].opening_hours.open_now ? "OPEN NOW" : "CLOSED")}</div>
                    <div className="place-address">Address: {props.places.length > 0 && props.places[2].vicinity}</div>
                    <div className="place-rating">Rating: {props.places.length > 0 && props.places[2].rating}</div>
                </div>
            </div>

            </div>
        </React.Fragment>
            
    )
}

export default Places;