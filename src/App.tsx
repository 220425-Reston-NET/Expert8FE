import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar';
import Home from './Routes/home/home';
import Welcome from './Routes/welcome/welcome';

function App() {
  return (
    // const {isAuthenticated} = useAuth0();
  
 <>
 <Nav />
 <Routes>
   <Route path='/appointments' element={<Home/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/welcome' element={<Home/>}/>
   <Route path='/register' element={<Home/>}/>
   <Route path='/searchgroomers' element={<Home/>}/>
   <Route path='/services' element={<Home/>}/>
   <Route path='/confrimed' element={<Home/>}/>

 </Routes>
    </>

    );
}

export default App;
