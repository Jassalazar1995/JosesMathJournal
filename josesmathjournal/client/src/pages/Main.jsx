import React from 'react';

const subjects = [
  { name: 'Calculus', icon: '/images/mainPage/calcLogo.png' },
  { name: 'Differential Equations', icon: '/images/mainPage/diffEqLogo.png' },
  { name: 'Linear Algebra', icon: '/images/mainPage/linearAlgLogo.png' },
  { name: 'Abstract Algebra', icon: '/images/mainPage/abstractAlgLogo.png' },
  { name: 'Real Analysis', icon: '/images/mainPage/realAnalysisLogo.png' },
  { name: 'Complex Analysis', icon: '/images/mainPage/complexAnalysisLogo.png' },
  { name: 'Topology', icon: '/images/mainPage/topologyLogo.png' },
  { name: 'Measure Theory', icon: '/images/mainPage/measureTheoryLogo.png' },
  { name: 'Numerical Analysis', icon: '/images/mainPage/numericalAnalysisLogo.png' },
  { name: 'Number Theory', icon: '/images/mainPage/numberTheoryLogo.png' },
  { name: 'Graph Theory', icon: '/images/mainPage/graphTheoryLogo.png' },
  { name: 'Combinatorics', icon: '/images/mainPage/combinatoricLogo.png' },
  { name: 'Functional Analysis', icon: '/images/mainPage/functionalAnalysisLogo.png' },
  { name: 'Differential Geometry', icon: '/images/mainPage/diffGeoLogo.png' },
  { name: 'Topological Vector Spaces', icon: '/images/mainPage/topologicalVectorSpaceLogo.png' },
];

const main = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-7xl font-bold text-white">The Math Journal</h1>
        <p className="text-gray-500 py-4 max-w-md">
          Mathematics is not about numbers, equations, or computations; it’s about understanding. Dive into a world of mathematical exploration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {subjects.slice(0, 5).map((subject, index) => ( // Show a limited number of subjects to avoid scrolling
            <div key={index} className="bg-white shadow-md rounded p-4">
              <Icon icon={subject.icon} className="text-3xl" />
              <h3 className="font-bold mt-2">{subject.name}</h3>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-4">Explore more subjects in our directory...</p>
      </div>
    </div>
  );
};

export default main;