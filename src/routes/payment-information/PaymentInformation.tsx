import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PaymentInformation.css'

function PaymentInformation() {




return (
    <div className="payment-information-page-container">
        <div className="payment-information-container">

        <h1 className="header"><b>Payment Information</b></h1>

        <div className="name-container billing-name-container">
            <div className="name">
            <label htmlFor="" className="form-label label-container">First Name</label>
            <input type="name" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="name">
            <label htmlFor="" className="form-label label-container">Last Name</label>
            <input type="name" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
        </div>   

        <div className="address-zip-container">
            <div className="address-zip">
            <label htmlFor="" className="form-label label-container">Address</label>
            <input type="address" className="form-control address-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="address-zip">
            <label htmlFor="" className="form-label label-container">Zip code</label>
            <input type="name" className="form-control zip-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>    
        </div>

        <div className="card-container">
            <div className="card-ccv">
            <label htmlFor="" className="form-label label-container">Debit/Credit</label>
            <input type="address" className="form-control" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>
            <div className="card-ccv">
            <label htmlFor="" className="form-label label-container">CCV</label>
            <input type="name" className="form-control ccv-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
            </div>    
        </div>

        <div className="buttons-container">
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btns btn button-container btn-lg">Pay with Paypal</button></div>     
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btns btn button-container btn-lg">Confirm Payment</button></div>     
            <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btns btn button-container btn-lg">Cancel</button></div>     
        </div>    

        </div>
    </div>
  )
}

export default PaymentInformation