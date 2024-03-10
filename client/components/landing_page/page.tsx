"use client";
import React from 'react';
import "./landing.css"; // Ensure this is the correct path to your CSS file

export default function LandingPage() {

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
        <img src="/gold-orbit.png" alt="Globe picture" style={{ maxWidth: "60px", position: "absolute", top: "0", right: "65px", marginTop: "6px" }} />
      </header>

      <div id="bigLandingBox">
        <section id="landingLargeText">
          AG Tech
          <div id="landingMediumText">Change now or face change</div>
        </section>

        <div id="centerlogos">
          <img id="hackmercedthing" src="/hack_merced.png" alt="Hack Merced logo" />
          <img id="agtechthing" src="/Agtech.png" alt="Ag Tech logo" />
        </div>
      </div>

      <div id="Nasaexplaining">
        <section className="APIs-used">
          <h3>NASA Satellite and Google Earth APIs</h3>
          {/* Adjusted the fontSize to a more reasonable value */}
          <h4 style={{ fontSize: '24px' }}>Key Details</h4>
          <p style={{ fontSize: '16px' }}>Additional fine print or minor details.</p>
        </section>
      </div>

      <div id="AItalk">
        <section className="APIs-used">
          <h3>AI Language Model</h3>
          {/* If there is content for h4, add it here */}
          <p style={{ fontSize: '16px' }}>Additional fine print or minor details.</p>
        </section>
      </div>

      <div id="howtoo">
        <section className="APIs-used">
          <h3>How to Use</h3>
          {/* If there is content for h4, add it here */}
          <p style={{ fontSize: '16px' }}>Additional fine print or minor details.</p>
        </section>
      </div>

      <div>
        <button id="startButton" type="submit" onClick={animateButton}>Submit</button>
      </div>
    </>
  );
}
