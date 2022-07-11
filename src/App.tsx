import React from 'react';
import logo from './logo.svg';
// import './App.css';
import{ Routes, Route} from 'react-router-dom';
import Nav from './shared/Nav';
import Welcome from './routes/welcome/Welcome';
import Login from './routes/login/Login';
import CreateAccount from './routes/create-account/CreateAccount';
import Dashboard from './routes/dashboard/Dashboard';
import Services from './routes/services/Services';
import YourProfile from './routes/your-profile/YourProfile';
import { Patient } from './models/Patient';
import { useSelector } from 'react-redux';
import ChooseSpecialist from './routes/choose-specialist/ChooseSpecialist';

function App() : JSX.Element {

  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/your-profile' element={<YourProfile/>}/>
      <Route path='/choose-specialist' element={<ChooseSpecialist/>}/>
    </Routes>
    </>
  );
}

export default App;
