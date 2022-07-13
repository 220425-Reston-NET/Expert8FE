import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PaymentConfirmed.css'

function PaymentConfirmed() {

  return (
    <div className="payment-confirmed-page-container">
        <div className="payment-information-container">

        <h1 className="header"><b>Payment Confirmed</b></h1>
        <br></br>
        <br></br>

            <div className="order-text">
            <p>Thank you for choosing MentalOne.</p>
            </div>

            <div className="order-container">
            <p>Your order number is:</p>
            </div>

            <div className="appoint-date-container">
            <p>Your appoint date is:</p>
            </div>

            <div className="amount-paid-container">
            <p>Amount paid is:</p>
            </div>
            

            <div className="buttons-container">
              <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className=" btn button-container btn-lg">Back to Dashboard</button></div>     
            </div>  
        </div>
    </div>
  )
}
export default PaymentConfirmed