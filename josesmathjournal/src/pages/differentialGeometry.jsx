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
        <div className="container ml-auto mr-auto mt-40 p-4">
            <h1 className="text-3xl font-bold mb-6">Differential Geometry</h1>
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