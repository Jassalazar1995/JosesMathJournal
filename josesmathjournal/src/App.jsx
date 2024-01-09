import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import DifferentialGeometry from './pages/differentialGeometry';
import FunctionalAnalysis from './pages/functionalAnalysis';
import ChapterPage from './pages/ChapterPage'; 
function App() {


    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/DiffGeo' element={<DifferentialGeometry />} />
                <Route path='/Functanal' element={<FunctionalAnalysis />} />
                <Route path='/chapters/:chapterId' element={<ChapterPage />} /> 
            </Routes>
        </>
    );
}

export default App;