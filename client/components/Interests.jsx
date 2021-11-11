import React, { useState } from 'react';

const Interests = (props) => {

    const [interest, setInterest] = useState("");
    const [maxPrice, setPrice] = useState("");
    const [radius, setRadius] = useState("");

    return (
        <React.Fragment>
            <div className="button-container">
                <div>
                {['Coffee', 'Bar', 'Breakfast', 'Restaurant', 'Park'].map(key =>
                        <button className={key === interest ? 'selected' : ''} type="button" key={key} onClick={() => setInterest(key)}>{key}</button>
                    )}
                </div>
                <div>

                    <button className="price-range" value="0" onClick={() => setPrice('0')}>$</button>
                    <button className="price-range" value="1" onClick={() => setPrice('1')}>$$</button>
                    <button className="price-range" value="2" onClick={() => setPrice('2')}>$$$</button>
                    <button className="price-range" value="3" onClick={() => setPrice('3')}>$$$$</button>
                    <button className="price-range" value="4" onClick={() => setPrice('4')}>$$$$$</button>
                </div>
                <div>
                    <input className="radius" type="text" placeholder="Enter radius in meters" value={radius} onChange={(e) => setRadius(e.target.value)}></input>
                </div>
                <div>
                    <button className="submit" onClick={() => props.getPlaces(props.midpoint, interest, maxPrice, radius)}>Submit</button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Interests;