import React from 'react';
import logo from './logo.svg';
// import './App.css';
import{ Routes, Route} from 'react-router-dom';
import Nav from './shared/Nav';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';
import CreateAccount from './routes/create-account/CreateAccount';
import Afterlogin from './routes/after-login/Afterlogin';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
      <Route path='/afterlogin' element={<Afterlogin/>}/>
    </Routes>
    </>
  );
}

export default App;
