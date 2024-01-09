import React, { useEffect, useState } from 'react';

export default function DifferentialGeometry() {
    // State to hold chapter information, including images
    const [chapters, setChapters] = useState([]);

    // Effect to load chapter data on component mount
    useEffect(() => {
        const fetchChapters = async () => {
            const fetchedChapters = [
                { title: 'Multivariable Calculus', content: 'Content for Multivariable Calculus', image: './images/diffgeo/MultiCalc.jpg' },
                { title: 'Forms', content: 'Content for Forms', image: './images/diffgeo/Forms.png' },
                { title: 'Differential Forms', content: 'Content for Differential Forms', image: './images/diffgeo/DifferentialForms.jpg' },
                { title: 'Differentiation of Differential Forms', content: 'Content for Differentiation of...', image: './images/diffgeo/DiffofDiffForms.png' },
                { title: 'Stokes Theorem', content: 'Content for Stokes Theorem', image: './images/diffgeo/Stokes.png' },
                { title: 'Manifolds', content: 'Content for Manifolds', image: './images/diffgeo/Manifolds.png' },
                { title: 'Differential Geometry via Differential Forms', content: 'Content for Differential Geometry via Differential Forms', image: './images/diffgeo/DiffGeo.png' },
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