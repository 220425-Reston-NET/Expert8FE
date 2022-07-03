import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './shared/Nav';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';
import CreateAccount from './routes/create-account/CreateAccount';

function App() {
  return (
  <>
  <Nav/>
  <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
    </Routes>
  </>
  );
}

export default App;
