"use client";
import React, { useState } from 'react';
import "./prompts.css";
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchWithParams } from '@/api/fetchserver';

interface DataResponse {
    url1: string,
    url2: string,
    text: string,
}

export default function Prompts() {
    const [showInfo, setShowInfo] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [dim, setDim] = useState('');
    const [date1, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(null);

    function animateButton() {
        // Call fetchWithParams and pass all the required variables
        const response = fetchWithParams<DataResponse>('data', {
            'lat': latitude,
            'long': longitude,
            'dim': dim,
            'date1': date1,
            'date2': date2,
            'additional': null
        });
    }

    function handleSubmit() {
        // Call animateButton function to trigger the fetchWithParams
        animateButton();

        // Save input values
        // For example, you can save the values to localStorage or send them to the server
        // Here, we are just logging the values to the console
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        console.log('Dimensions:', dim);
        console.log('Start Date:', date1);
        console.log('End Date:', date2);
    }

    return (
        <>
            <header>
                <h1>HackMerced IX</h1>
                <img src="/gold-orbit.png" alt="Globe picture" style={{ width: "100%", maxWidth: "60px", position: "absolute", top: "0", right: "65px", marginTop: "6px" }} />
            </header>
            <div>
                <div id="promptText" className="prompt-text">Enter Information</div>
                <form id="promptForm" style={{ marginBottom: "350px" }}>
                    <div className="input-group">
                        <input id="latitudeInput" className="promptInput" type="text" name="latitude" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                        <input id="longitudeInput" className="promptInput" type="text" name="longitude" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
                    </div>
                    <div className="input-group dimensions-group">
                        <input id="dimensionsInput" className="promptInput" type="text" name="dimensions" placeholder="Dimensions" value={dim} onChange={(e) => setDim(e.target.value)} required />
                        <div className="info-icon" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                            <div className={`info-box ${showInfo ? 'active' : ''}`}>
                                <p>The dimensions are counted in degrees, the default is 0.01. One degree is about 70 miles.</p>
                            </div>
                        </div>
                    </div>
                    <DatePicker
                        selected={date1}
                        onChange={(date) => setDate1(date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Start Date"
                        className="rounded-md border custom-datepicker"
                    />
                    <DatePicker
                        selected={date2}
                        onChange={(date) => setDate2(date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="End Date"
                        className="rounded-md border custom-datepicker"
                    />
                    <button id="promptSubmit" type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}
