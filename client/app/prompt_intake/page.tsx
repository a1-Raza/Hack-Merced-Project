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

    async function animateButton() {
        const button = document.getElementById('promptSubmit');
        if (button) {
            button.style.animation = 'shrink 0.5s forwards';
            setTimeout(() => {
                button.style.animation = '';
            }, 500);
        }
        const response = await fetchWithParams<DataResponse>('data', {
            'lat': latitude,
            'long': longitude,
            'dim': dim,
            'date1': date1,
            'date2': date2,
            'additional': null
        });
        console.log('Response:', response); // Adding console log here
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
                    <button id="promptSubmit" type="button" onClick={animateButton}>Submit</button>
                </form>
                <div id="promptList" className="chat-container">
                    {/* Prompt list will be displayed here */}
                </div>
            </div>
        </>
    );
}
