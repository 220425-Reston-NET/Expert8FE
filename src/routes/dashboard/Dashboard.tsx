import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Dashboard.css'
import { Patient } from '../../models/Patient';

import CreateAccount from '../create-account/CreateAccount';
import { useSelector } from 'react-redux';



function Dashboard() {

  const userlist = useSelector((state : any) => state.counter.value)

  const [ayy, setyy] = useState([userlist])

  let testing1 = ayy.map((ayyy) => (ayyy.services[0].specialists[0].wayOfMeeting[0].meetingServices))

 

  
  

  const navigate = useNavigate();
  
  
  
    const goToServices = () => {
        navigate('/services');
    };
    const goToProfile = () => {
        navigate('/your-profile')
    }
    const goToChats = () => {
      navigate('/chats')
  }
  const goToAppointments = () => {
    navigate('/your-appointments')
}

    
    const test = useParams();
    const user = test.userId;

    
    
    
   

  

  return (
    <div  className='dashboard-layout'>
    <h1 className='header-container'>Welcome { userlist.firstName }</h1>
      <div className='buttons-container'>
                <button onClick={goToAppointments} type="button" className="btn btn-outline-primary btn-lg" style={{margin: 'auto'}}>Your Appointments</button>
                <button onClick={goToChats}type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>Your Chats</button>
                <button onClick={goToProfile}type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>Your Profile</button>
                <button onClick={goToServices} type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Schedule Appointment</button>
            </div>
      <div className='image-container'>
        <a href="https://imgur.com/wxSaEhG"><img src="https://i.imgur.com/wxSaEhG.png" title="source: imgur.com" /></a>
      </div>
    </div>
  )
}

export default Dashboard