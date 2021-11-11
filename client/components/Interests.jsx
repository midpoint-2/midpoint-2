import React, { useState } from 'react';
import { $CombinedState } from 'redux';

const Interests = (props) => {

    const [interest, setInterest] = useState("");
    const [selectedInterest, setSelectedInterest] = useState("");
    const [maxPrice, setPrice] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [radius, setRadius] = useState("");

    const categories = ['coffee', 'bar', 'restaurant', 'park'];
    const budget = ['1', '2', '3', '4'];

    const categoryButtons = categories.map(category => {
        return <button id={category} className={category + (selectedInterest === category ? ' active' : '')} value={category} onClick={(e) => handleInterest(e.target.value)}>{category}</button>
    });

    const priceButtons = budget.map(price => {
        return <button id={price} className={"price-range" + (selectedPrice === price ? ' active' : '')} value={price} onClick={(e) => handlePrice(e.target.value)}>{'$'.repeat(Number(price))}</button>;
    });

    const handleInterest = (category) => {
        setInterest(category);
        setSelectedInterest(category);
    }

    const handlePrice = (price) => {
        setPrice(price);
        setSelectedPrice(price);
    }

    return (
        <React.Fragment>
            <div className="button-container">
                <div>
                    {categoryButtons}
                </div>
                <div>
                    {priceButtons}
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