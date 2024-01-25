import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import chapterContents from '../chapterContent';

export default function DifferentialGeometry() {
    // Filter and map over the chapterContents object to get only the relevant chapters
    const chaptersArray = Object.entries(chapterContents)
        .filter(([key, value]) => value.subject === 'diffGeo')
        .map(([key, value]) => ({
            title: value.title,
            content: value.content,
            image: value.image,
            path: key 
        }));

    return (
        <div className="container ml-auto mr-auto mt-40 p-4 ">
            <h1 className="text-3xl font-bold mb-40">Functional Analysis</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {chaptersArray.map((chapter, index) => (
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