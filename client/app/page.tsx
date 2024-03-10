"use client";

import React, { useState } from 'react';
import LandingPage from '@/components/landing_page/page';
import PromptsPage from '@/components/prompts_page/page';
import ResultsPage from '@/components/results_page/page';

type PageName = 'landing' | 'prompts' | 'results';


function Project() {

    const [currentPage, setCurrentPage] = useState('landing');
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
            <button onClick={() => changePage('landing')}>Go to Landing Page</button>
            <button onClick={() => changePage('prompts')}>Go to Prompts Page</button>
            <button onClick={() => changePage('results')}>Go to Results Page</button>
        </div>
    )
}

export default Project;