import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './YourProfile.css'

function YourProfile() {


return (
    <div className="your-profile-page-container">
    <div className="your-profile-container">
        <h1 className="headline-container"><b>Your Profile</b></h1>
        <div className="name-container">
            <div className="name">
            <label htmlFor="" className="form-label label-container">First Name</label>
            <input type="name" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="name">
            <label htmlFor="" className="form-label label-container">Last Name</label>
            <input type="name" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div>   

        <div className="address-container">
            <div className="address">
            <label htmlFor="" className="form-label label-container">Email dress</label>
            <input type="address" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="address">
            <label htmlFor="" className="form-label label-container">Address</label>
            <input type="address" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div> 

        <div className="city-state-container">
            <div className="city-state">
            <label htmlFor="" className="form-label label-container">City</label>
            <input type="name" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="city-state">
            <label htmlFor="" className="form-label label-container">State</label>
            <input type="name" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div> 

        <div className="zip-phone-container">
            <div className="zip-phone">
            <label htmlFor="" className="form-label label-container">Zip code</label>
            <input type="name" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="zip-phone">
            <label htmlFor="" className="form-label label-container">Phone  </label>
            <input type="name" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div>
        <div className="buttons-container">
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btns btn button-container btn-lg">Save Changes</button></div>     
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btns btn button-container btn-lg">Cancel Changes</button></div>     
        </div>
        
    </div>
    </div>
    )//end of return
}//end of YourProfile()

export default YourProfile