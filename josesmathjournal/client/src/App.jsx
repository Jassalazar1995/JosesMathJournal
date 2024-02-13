import { Routes, Route } from 'react-router-dom';
import { useState} from 'react';

import './App.css';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Main from './pages/Main';
import DifferentialGeometry from './pages/differentialGeometry';
import FunctionalAnalysis from './pages/functionalAnalysis';
import ChapterPage from './pages/ChapterPage'; 
import Register from "./pages/Register"
import Login from './pages/Login'
import Profile from './pages/profile';
import Donate from './pages/Donate';
import Feed from './components/Feed';
import Completion from './pages/Completion';


function App() {
  const [ user, setUser ] = useState({})


  return (
    <>
      <Nav username ={user.username} setUser={setUser}/>
      <div className="pt-290" >{/* Added padding to the top to push content below the navbar */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/blog' element = {<Feed username = {user.username} />}></Route>
          <Route path='/Donate' element = {<Donate />}></Route>
          <Route path='/Completion' element = {<Completion />}></Route>
          <Route path='/register' element = {<Register setUser = {setUser}/>}></Route>
          <Route path='/login' element = {<Login setUser = {setUser} />}></Route>
          <Route path='/profile' element = {<Profile username ={user.username} email={user.email} points = {user.points} level = {user.level}/>}></Route>
          <Route path='/DiffGeo' element={<DifferentialGeometry />} />
          <Route path='/Functanal' element={<FunctionalAnalysis />} />
          <Route path='/chapters/:chapterId' element={<ChapterPage />} /> 
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
