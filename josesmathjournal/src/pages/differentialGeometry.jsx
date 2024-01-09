import React, { useEffect, useState } from 'react';

export default function DifferentialGeometry() {
    // State to hold chapter information, including images
    const [chapters, setChapters] = useState([]);

    // Effect to load chapter data on component mount
    useEffect(() => {
        const fetchChapters = async () => {
            const fetchedChapters = [
                { title: 'Multivariable Calculus', content: 'Content for Multivariable Calculus', image: './images/diffgeo/MultiCalc.jpg', path: './diffGeoChapters/' },
                { title: 'Forms', content: 'Content for Forms', image: './images/diffgeo/Forms.png', path: './diffGeoChapters/' },
                { title: 'Differential Forms', content: 'Content for Differential Forms', image: './images/diffgeo/DifferentialForms.jpg', path: './diffGeoChapters/' },
                { title: 'Differentiation of Differential Forms', content: 'Content for Differentiation of...', image: './images/diffgeo/DiffofDiffForms.png', path: './diffGeoChapters/' },
                { title: 'Stokes Theorem', content: 'Content for Stokes Theorem', image: './images/diffgeo/Stokes.png', path: './diffGeoChapters/' },
                { title: 'Manifolds', content: 'Content for Manifolds', image: './images/diffgeo/Manifolds.png', path: './diffGeoChapters/' },
                { title: 'Differential Geometry via Differential Forms', content: 'Content for Differential Geometry via Differential Forms', image: './images/diffgeo/DiffGeo.png', path: './diffGeoChapters/' },
            ];
            setChapters(fetchedChapters);
        };

        fetchChapters();
    }, []);

    return (
        <div>
            <h1>Differential Geometry</h1>
            <div className="chapters-container">
                {chapters.map((chapter, index) => (
                    <div className="chapter" key={index}>
                        <img src={chapter.image} alt={`Image for ${chapter.title}`} className="chapter-image" />
                        <h2>{chapter.title}</h2>
                        <p>{chapter.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}