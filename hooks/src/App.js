import React from "react";
import ToggleBTN from './useState/subscribeBTN/toggleBtn';
import StarRating from './useState/ProductRating/ProductRating';

// Center Everything 
const bodyStyle = {
    "display":"grid",
    "placeItems":"center",
    "font":"900 24px/1.4, sans-serif",
    "textAlign":"center",
    "margin":"0",
}


function App() {
    return (
        <div style={bodyStyle}>
            <h2>Use State:</h2>
            <ToggleBTN />
            <StarRating totalStars={5} />

        </div>

    );
}

export default App;
