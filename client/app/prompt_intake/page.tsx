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
            <header>
                <h1>HackMerced IX</h1>
                <img src="/gold-orbit.png" alt="Globe picture" style={{ width: "100%", maxWidth: "60px", position: "absolute", top: "0", right: "65px", marginTop: "6px" }} />
            </header>
            <div>
                
                <div id="promptText" className="prompt-text">Enter Coordinates</div>
                <form id="promptForm">
                    <div className="input-group">
                        <input id="latitudeInput" className="promptInput" type="text" name="latitude" placeholder="Latitude" required />
                    </div>
                    <div className="input-group">
                        <input id="longitudeInput" className="promptInput" type="text" name="longitude" placeholder="Longitude" required />
                    </div>
                    <div className="input-group zoom-group">
                        <input id="zoomInput" className="promptInput" type="text" name="zoom" placeholder="Zoom" required />
                    </div>
                    <button id="promptSubmit" type="submit" onClick={animateButton}>Submit</button>
                </form>
                <div id="promptList" className="chat-container">
                    {/* Prompt list will be displayed here */}
                </div>
            </div>
        </>
    );
}
