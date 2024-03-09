"use client";

import "./prompts.css"

export default function Prompts() {
    

    function animateButton() {
        const button = document.getElementById('promptSubmit');
        if (button) {
            button.style.animation = 'shrink 0.5s forwards';
            setTimeout(() => {
                button.style.animation = '';
            }, 500);
        }
    };

    return (
        <>
            <header></header>
        <header>
            <h1>Merced Hackathon IX</h1>
        </header>

        <div>
            <img src="/gold-orbit.png" alt="Globe picture" style={{ width: "100%", maxWidth: "50px", position: "absolute", top: "0", right: "10px", marginTop: "2px" }} />
            <div id="promptText" className="prompt-text">Enter Coordinates</div>
            <form id="promptForm">
                <input id="latitudeInput" className="promptInput" type="text" name="latitude" placeholder="Latitude" required />
                <input id="longitudeInput" className="promptInput" type="text" name="longitude" placeholder="Longitude" required />
                <button id="promptSubmit" type="submit" onClick={(animateButton)}>Submit</button>
            </form>
            <div id="promptList" className="chat-container">
                {/* Prompt list will be displayed here */}
            </div>
        </div>
        
        </>
    );
}