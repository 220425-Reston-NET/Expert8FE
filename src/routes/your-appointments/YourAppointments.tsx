import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './YourAppointments.css'

function YourAppointments() {


  return (
    <div className="your-appointments-page-container">
        <div className="your-appointmnet-container">
        <h1 className="header"><b>Your Appointments</b></h1>

            <div className="title-container">
            <p>Future Appointments</p>
            <br></br>
            </div>

            <div className="past-appointments-container">
            <p>Past Appointments</p>
            </div>

        </div>
    </div>
  )
}
export default YourAppointments