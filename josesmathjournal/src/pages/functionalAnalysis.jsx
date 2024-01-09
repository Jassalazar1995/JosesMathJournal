import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function FunctionalAnalysis() {
    // State to hold chapter information including images and path to the chapter page
    const [chapters, setChapters] = useState([]);

    // Effect to load chapter data on component 
    useEffect(() => {
        const fetchChapters = async () => {
            const fetchedChapters = [
                { title: 'Metric Spaces, Normed Spaces, Inner Product Spaces', content: 'Content for Metric Spaces...', image: './images/funanal/Drum_vibration_mode12.gif', path: './spaces'},
                { title: 'Topology of Metric Spaces', content: 'Content for Topology of Metric Spaces...', image: './images/funanal/Möbius_strip.jpg', path: './metricSpaces' },
                { title: 'Measure and Integration', content: 'Content for Measure and Integration...', image: './images/funanal//MeasureTheory.png', path: './measureIntegration' },
                { title: 'Fourier Analysis in Hilbert Space', content: 'Content for Fourier Analysis...', image: './images/funanal/Fourier.png', path: './fourier' },
                { title: 'An Introduction to Abstract Linear Operator Theory', content: 'Content for Linear Operator Theory...', image: './images/funanal/DeSKO.png', path: './linearOpTheory' }
            ];
            setChapters(fetchedChapters);
        };

        fetchChapters();
    }, []);

    return (
        <div>
            <h1>Functional Analysis</h1>
            <div className="chapters-container">
                {chapters.map((chapter, index) => (
                    <div className="chapter" key={index}>
                        {/* Update the `to` prop to match the route defined in App.jsx */}
                        <Link to={`/chapters/${chapter.path}`}>
                            <img src={chapter.image} alt={`Image for ${chapter.title}`} className="chapter-image" />
                            <h2>{chapter.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}