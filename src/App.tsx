import React from 'react';
import logo from './logo.svg';
// import './App.css';
import{ Routes, Route} from 'react-router-dom';
import Nav from './shared/Nav';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';
import CreateAccount from './routes/create-account/CreateAccount';
<<<<<<< HEAD
import Dashboard from './routes/dashboard/Dashboard';
import Services from './routes/services/Services';
=======
import Afterlogin from './routes/after-login/Afterlogin';
>>>>>>> 4d81bfa72332122fd715b603e2c6c806b719d9cc

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
<<<<<<< HEAD
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/services' element={<Services/>}/>
=======
      <Route path='/afterlogin' element={<Afterlogin/>}/>
>>>>>>> 4d81bfa72332122fd715b603e2c6c806b719d9cc
    </Routes>
    </>
  );
}

export default App;
