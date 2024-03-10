"use client";

import React, { useState } from 'react';
import LandingPage from '@/components/landing_page/page';
import PromptsPage from '@/components/prompts_page/page';
import ResultsPage from '@/components/results_page/page';

import "./pagebuttons.css"

type PageName = 'landing' | 'prompts' | 'results';

function Project() {

    const [currentPage, setCurrentPage] = useState('prompts');
    const changePage = (pageName: PageName) => {
        setCurrentPage(pageName);
    };

    let currentPageComponent;
    switch (currentPage) {
        case 'landing':
            currentPageComponent = <LandingPage />;
            break;
        case 'prompts':
            currentPageComponent = <PromptsPage />;
            break;
        case 'results':
            currentPageComponent = <ResultsPage />;
            break;
        default:
            currentPageComponent = null; // Handle unknown page name
    }

    return (
        <div>
            {/* Render the current page */}
            {currentPageComponent}

            {/* Buttons to change pages */}
            <div id="centerPageButtons">
            
            <button id="pageChangeButton" onClick={() => changePage('prompts')}>Input Parameters</button>
            <button id="pageChangeButton" onClick={() => changePage('results')}>Analysis</button>
            </div>
            
        </div>
    )
}

export default Project;