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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Functional Analysis</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {chapters.map((chapter, index) => (
                    <Link to={`/chapters/${chapter.path}`} key={index} className="block transform transition duration-500 hover:scale-105">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img src={chapter.image} alt={`Image for ${chapter.title}`} className="w-full" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{chapter.title}</div>
                                <p className="text-gray-700 text-base">
                                    {chapter.content}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}