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
  { name: 'Geometry', icon: '/images/mainPage/geometryLogo.png' },
  // ... other subjects
];

const main = () => {
  return (
    <div className="container mx-auto px-4 m-40">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">The Math Journal</h1>
        <p className="text-md mt-3">Mathematics is not about numbers, equations, or computations; it’s about understanding. It's a journey of discovery where every challenge overcome is a victory.</p>
        <p>Welcome to the Math Journal! Here you are able to learn math to your hearts content.</p>
      </header>

      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Directory of Subjects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <div key={subject.name} className="bg-white shadow-md rounded p-4 text-center">
              <img src={subject.icon} alt={subject.name} className="mx-auto mb-3" />
              <h3 className="font-bold">{subject.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="my-10">
        <input type="text" placeholder="Search The Journal" className="shadow border rounded py-2 px-3 text-gray-700 w-full" />
      </footer>
    </div>
  );
};

export default main;