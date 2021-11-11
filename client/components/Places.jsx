import React from 'react';

const Places = (props) => {

    console.log(props.places)
    return (
        <React.Fragment>
            <div className="places-wrapper">
                <div className="places-info">
                    <div className="place-name">Business Name {props.places.length > 0 && props.places[0].name}</div>
                    <div className="place-desc">Desc</div>
                    <div className="place-phone">Phone</div>
                    <div className="place-address">Address</div>
                    <div className="place-rating">Rating</div>
                </div>
                <div className="places-photo">photo link goes here</div>
            </div>
            
        </React.Fragment>
            
    )
}

export default Places;