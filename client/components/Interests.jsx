import React from 'react';

const Interests = () => {

    return (
        <React.Fragment>
            <div>
                <div className="button-container">
                    <button className="coffee" value="coffee">Coffee</button>
                    <button className="bar" value="bar">Bar</button>
                    <button className="restaurant" value="restaurant">Restaurant</button>
                </div>
                <div>
                    <button className="price-range" value="4">*****</button>
                    <button className="price-range" value="3">****</button>
                    <button className="price-range" value="2">***</button>
                    <button className="price-range" value="1">**</button>
                    <button className="price-range" value="0">*</button>
                </div>
                <div>
                    <input className="radius" type="text" placeholder="enter radius" value="radius"></input>
                </div>
                <div>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Interests;