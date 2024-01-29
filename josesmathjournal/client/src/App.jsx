import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

import Nav from './components/Nav';

import Main from './pages/Main';
import DifferentialGeometry from './pages/differentialGeometry';
import FunctionalAnalysis from './pages/functionalAnalysis';
import ChapterPage from './pages/ChapterPage'; 
import Register from "./pages/Register"
import Login from './pages/Login'

// useEffect(()=>{
    
//   const test = async () => {
//     try {
//       const response = await axios.get('/api/test')
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }

//   }
//   test()
// },[])

function App() {
  const [ user, setUser ] = useState({})

//   async function getUser(token) {
//     try {
//         const response = await axios.get('/api/users', {
//             headers: {
//                 Authorization: token
//             }
//         })
//         setUser(response.data)
//         console.log(response.data)
//     } catch(err) {
//         console.log(err)
//         localStorage.removeItem("token")
//     }
    
// }

  return (
    <>
      <Nav />
      <div className="pt-290" >{/* Added padding to the top to push content below the navbar */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element = {<Register setUser = {setUser}/>}></Route>
          <Route path='/login' element = {<Login setUser = {setUser} />}></Route>
          <Route path='/DiffGeo' element={<DifferentialGeometry />} />
          <Route path='/Functanal' element={<FunctionalAnalysis />} />
          <Route path='/chapters/:chapterId' element={<ChapterPage />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
