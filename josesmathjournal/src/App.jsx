import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Main from './pages/Main';
import DifferentialGeometry from './pages/differentialGeometry';
import FunctionalAnalysis from './pages/functionalAnalysis';
import PomodoroClock from './components/PomodoroClock';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/DiffGeo' element={<DifferentialGeometry />} />
            <Route path='/Functanal' element={<FunctionalAnalysis />} />
            <Route path ='Pomoclock' element={<PomodoroClock />} />
        </Routes>
    </>
)
}

export default App
