import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Dashboard.css'
import { Patient } from '../../models/Patient';

import CreateAccount from '../create-account/CreateAccount';



function Dashboard(props : any) {

  
  const navigate = useNavigate();

  const [customer, setcustomer] = useState({} as Patient);
    
    const goToServices = () => {
        navigate('/services');
    };


    const test = useParams();
    const user = test.userId;

    
    
    
   

  

  return (
      <div className='buttons-container'>
        <h1 className='header-container'>Welcome { user }</h1>
    <div  className='dashboard-layout'>
                <button type="button" className="btn btn-outline-primary btn-lg" style={{margin: 'auto'}}>Your Appointments</button>
                <button type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>Your Chats</button>
                <button type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>Your Profile</button>
                <button onClick={goToServices} type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Schedule Appointment</button>
            </div>
      <div className='image-container'>
        <a href="https://imgur.com/wxSaEhG"><img src="https://i.imgur.com/wxSaEhG.png" title="source: imgur.com" /></a>
      </div>
    </div>
  )
}

export default Dashboard