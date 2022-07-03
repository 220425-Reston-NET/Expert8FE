import React from 'react';
import logo from './logo.svg';
// import './App.css';
import{ Routes, Route} from 'react-router-dom';
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
<<<<<<< HEAD
      <Route path='/create-account' element={<CreateAccount/>}/>
=======
      <Route path='/createaccount' element={<CreateAccount/>}/>
>>>>>>> 4e008dbe6b4f7d641811316b4a53c4d8249057fd
    </Routes>
    </>
  );
}

export default App;
