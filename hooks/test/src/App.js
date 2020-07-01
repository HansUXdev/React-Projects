import React from "react";
import ToggleBTN from './useState/toggleBtn';

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

        </div>

    );
}

export default App;
