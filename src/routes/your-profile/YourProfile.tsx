import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './YourProfile.css'

function YourProfile() {

    const userlist = useSelector((state : any) => state.counter.value)

return (
    <div className="your-profile-page-container">
    <div className="your-profile-container">

        <h1 className="header"><b>Your Profile</b></h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="name-container">
            <div className="name">
            <label htmlFor=""  className="form-label label-container">First Name</label>
            <input type="name" className="form-control" placeholder={userlist.firstName} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="name1">
            <label htmlFor="" className="form-label label-container">Last Name</label>
            <input type="name"  className="form-control" placeholder={userlist.lastName} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div>   

        <div className="address-container">
            <div className="address">
            <label htmlFor="" className="form-label label-container">Email Address</label>
            <input type="address" className="form-control" placeholder={userlist.email} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="address">
            <label htmlFor="" className="form-label label-container">Street Address</label>
            <input type="address" className="form-control" placeholder={userlist.address} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div> 

        <div className="city-state-container">
            <div className="city-state">
            <label htmlFor="" className="form-label label-container">City</label>
            <input type="city" className="form-control city-fprm" placeholder={userlist.city} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="city-state">
            <label htmlFor="" className="form-label label-container">State</label>
            <input type="state" className="form-control state-form" placeholder={userlist.state} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div> 

        <div className="zip-phone-container">
            <div className="zip-phone">
            <label htmlFor="" className="form-label label-container">Zip Code</label>
            <input type="zip" className="form-control zip-form" placeholder={userlist.zip} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="zip-phone" >
            <label htmlFor="" className="form-label label-container">Phone  </label>
            <input type="phone" className="form-control phone-form" placeholder={userlist.phone} disabled id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div>
        <br></br>
        <div className="buttons-container">
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Back</button></div>     
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Edit Profile</button></div>     
        </div>

        <iframe _ngcontent-eni-c5="" src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PgOrGbdy90WfHv61Ct0uAdk6UblAZzGG8tRntCRvQUUrJSZG1IkvxPqpK9ciMzmcpxG-Cn3mN" width="100%" height="400px"></iframe>
        
    </div>
    </div>
    )//end of return
}//end of YourProfile()

export default YourProfile