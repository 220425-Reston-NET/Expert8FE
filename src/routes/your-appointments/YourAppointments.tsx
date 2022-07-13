import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './YourAppointments.css'

function YourAppointments() {

  const userlist = useSelector((state : any) => state.counter.value)

  return (
    <div className="your-appointments-page-container">
        <div className="your-appointmnet-container">
          <h1 className="header"><b>Your Appointments</b></h1>
          <br></br>
          <br></br>

            <div className="title-container">
              <p>Future Appointments</p>
            </div>

            <div className="scroll-table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Therapist</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Way of Meet</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{userlist.services[0].specialists[0].specialistName}</td>
                  <td>{userlist.services[0].serviceName}</td>
                  <td>{userlist.services[0].specialists[0].wayOfMeeting[0].meetingServices}</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>

            <div className="past-appointments-container">
            <p>Past Appointments</p>
            </div>

          <div className="scroll-table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Therapist</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Way of Meet</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>     
                <tr>
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>                           
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
export default YourAppointments