"use client";
import React, { useState } from 'react';
import "./prompts.css";
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Prompts() {
  const [showInfo, setShowInfo] = useState(false);

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
        <form id="promptForm" style={{ marginBottom: "350px" }}>
          <div className="input-group">
            <input id="latitudeInput" className="promptInput" type="text" name="latitude" placeholder="Latitude" required />
            <input id="longitudeInput" className="promptInput" type="text" name="longitude" placeholder="Longitude" required />
          </div>
          <div className="input-group dimensions-group">
            <input id="dimensionsInput" className="promptInput" type="text" name="dimensions" placeholder="Dimensions" required />
            <div className="info-icon" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <div className={`info-box ${showInfo ? 'active' : ''}`}>
                <p>The dimensions are counted in degrees, the default is 0.01. One degree is about 70 miles.</p>
              </div>
            </div>
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
