import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css'

function CreateAccount() {



  return (
    <div className="create-account-page-container">
      <div className="create-account-container">
      <h1 className="tell-us"><b>Tell us about yourself</b></h1>
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

                    <label htmlFor="" className="form-label label-container">Email address</label>
                    <input type="" className="form-control" placeholder="johndoe@gmail.com" id="" /* onChange={}  */ aria-describedby=""/>

                    <label htmlFor="" className="form-label label-container">Phone Number</label>
                    <input type="" className="form-control" placeholder="5555551234" id="" /* onChange={}  */ aria-describedby=""/>

                    <div className="address-container-a">
                      <div className="street-city">
                      <label htmlFor="" className="form-label label-container">Street Address</label>
                      <input type="address" className="form-control" placeholder="123 Main St" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                      <div className="street-city">
                      <label htmlFor="" className="form-label label-container">City</label>
                      <input type="address" className="form-control" placeholder="Louisville" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                    </div>

                    <div className="address-container-b">
                      <div className="state-zip">
                      <label htmlFor="" className="form-label label-container">State</label>
                      <input type="" className="form-control" placeholder="Kentucky" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                      <div className="state-zip">
                      <label htmlFor="" className="form-label label-container">Zipcode</label>
                      <input type="" className="form-control" placeholder="55555" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                    </div>

                    <label htmlFor="password" className="form-label label-container">Password</label>
                    <input type="password" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>

                    <label htmlFor="re-password" className="form-label label-container">Re-enter Password</label>
                    <input type="password" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>

                    <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Submit</button></div>                                                                                                                            
                </div>


    </div>//end of create-account-container

  )//end of return

}//end of CreateAccount()

export default CreateAccount