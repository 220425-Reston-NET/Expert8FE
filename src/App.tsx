import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './shared/Nav';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';

function App() {
  return (
  <>
  <Nav/>
  <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </>
  );
}

export default App;
