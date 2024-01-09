import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function DifferentialGeometry() {
    // State to hold chapter information, including images, and path to the chapter page
    const [chapters, setChapters] = useState([]);

    // Effect to load chapter data on component
    useEffect(() => {
        const fetchChapters = async () => {
            const fetchedChapters = [
                { title: 'Multivariable Calculus', content: 'Content for Multivariable Calculus', image: './images/diffgeo/MultiCalc.jpg', path: './MultiCalc' },
                { title: 'Forms', content: 'Content for Forms', image: './images/diffgeo/Forms.png', path: './forms' },
                { title: 'Differential Forms', content: 'Content for Differential Forms', image: './images/diffgeo/DifferentialForms.jpg', path: './diffForms' },
                { title: 'Differentiation of Differential Forms', content: 'Content for Differentiation of...', image: './images/diffgeo/DiffofDiffForms.png', path: './diffOfDiffForms' },
                { title: 'Stokes Theorem', content: 'Content for Stokes Theorem', image: './images/diffgeo/Stokes.png', path: './diffGeoChapters/stokes' },
                { title: 'Manifolds', content: 'Content for Manifolds', image: './images/diffgeo/Manifolds.png', path: './diffGeoChapters/manifolds' },
                { title: 'Differential Geometry via Differential Forms', content: 'Content for Differential Geometry via Differential Forms', image: './images/diffgeo/DiffGeo.png', path: './diffGeoChapters/diffGeoDiffForms' },
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