import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Import axios for making HTTP requests

import "./results.css";

export default function ResultsPage() {
  const [aiText, setAiText] = useState('');
  const [imgUrl1, setUrlOne] = useState('');
  const [imgUrl2, setUrlTwo] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('/data', {
        // Include any necessary data for the request
        lat: 'your_latitude_value',
        long: 'your_longitude_value',
        dim: 'your_dimensions_value',
        date1: 'your_date1_value',
        date2: 'your_date2_value',
        additional: 'your_additional_value'
      });

      // Extract the text from the response and update the state
      const { text } = response.data;
      setAiText(text);
      const { imgUrl1 } = response.data;
      setUrlOne(imgUrl1);
      const { imgUrl2 } = response.data;
      setUrlTwo(imgUrl2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function animateButton() {
    const button = document.getElementById('buttonSubmit');
    if (button) {
      button.style.animation = 'shrink 0.5s forwards';
      setTimeout(() => {
        button.style.animation = '';
      }, 500);
    }
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <header>
        <h1>HackMerced IX</h1>
        <img src="/gold-orbit.png" alt="Globe picture" style={{ width: "100%", maxWidth: "60px", position: "absolute", top: "0", right: "65px", marginTop: "6px" }} />
      </header>

      <div id="resultsItems">
        <div id="resultsSet">

          <div id="headingText">
            Satellite Images
          </div>
          <div id="imageStack">
            <div id="subheadingText">Lat / Long</div>
            <div>
              <div id="imageDate">yyyy-mm-dd</div>
              <Image src={imgUrl1 || "https://i.imgur.com/LLcSfJ7.jpeg"}
                alt="Earth Engine Image" width={200} height={200} />
            </div>
            <div>
              <div id="imageDate">yyyy-mm-dd</div>
              <Image src={imgUrl2 || "https://i.imgur.com/LLcSfJ7.jpeg"}
                alt="Earth Engine Image" width={200} height={200} />
            </div>
          </div>
        </div>

        <div id="resultsSet">
          <div id="headingText">
            Analysis Results
          </div>
          <div id="gptOutput">
            {aiText || 'Loading...'} {/* Display loading text while waiting for response */}
          </div>
          <form id="buttonPositioning">
            <button id="buttonSubmit" type="submit" onClick={animateButton}>Analyze Again</button>
          </form>
        </div>
      </div>
    </>
  );
}
