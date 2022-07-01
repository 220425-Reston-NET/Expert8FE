import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './shared/Nav';
import { Route, Routes } from 'react-router-dom';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
