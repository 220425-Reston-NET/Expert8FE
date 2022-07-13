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
import PaymentInformation from './routes/payment-information/PaymentInformation';
import { Patient } from './models/Patient';
import { useSelector } from 'react-redux';
import ChooseSpecialist from './routes/choose-specialist/ChooseSpecialist';
import Chats from './routes/chats/Chats';
import PaymentConfirmed from './routes/payment-confirmed/PaymentConfirmed';
import YourAppointments from './routes/your-appointments/YourAppointments';

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
      <Route path='/chats' element={<Chats/>}/>
      <Route path='/payment-information' element={<PaymentInformation/>}/>
      <Route path='/payment-confirmed' element={<PaymentConfirmed/>}/>
      <Route path='/your-appointments' element={<YourAppointments/>}/>
    </Routes>
    </>
  );
}

export default App;
