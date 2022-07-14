import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../../store/Add';
import './PaymentInformation.css'

function PaymentInformation() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userlist = useSelector((state: any) => state.service.value)


  const gotoConfirm = () => {
    navigate('/payment-confirmed')
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    await fetch(
      "http://expert8env-env.eba-q62pjcac.us-east-1.elasticbeanstalk.com/AddServices",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pID: userlist.pID,
          mhsID: userlist.mhsID,
          mhpID: userlist.mhpID,
          ssID: userlist.ssID,
          wID: userlist.wID

        }),
      }
    )
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {


          throw `error with status ${response.status}`;
        }
      })

      .then(
        (data) => {
          // change/ attached user to user id in db




          console.log(data);
          gotoConfirm();


        },
        () => {

        }
      );
  }


  return (
    <div className="payment-information-page-container">
      <div className="payment-information-container">

        <h1 className="header"><b>Payment Information {userlist.pID}</b></h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="name-container billing-name-container">
          <div className="name">
            <label htmlFor="" className="form-label label-container">First Name</label>
            <input type="name" className="form-control" placeholder="John" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
          <div className="name">
            <label htmlFor="" className="form-label label-container">Last Name</label>
            <input type="name" className="form-control" placeholder="Doe" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
        </div>

        <div className="address-city-container">
          <div className="address-city">
            <label htmlFor="" className="form-label label-container">Street Address</label>
            <input type="address" className="form-control address-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
          <div className="address-city">
            <label htmlFor="" className="form-label label-container">City</label>
            <input type="city" className="form-control city-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
        </div>

        <div className="state-zip-container">
          <div className="state-zip">
            <label htmlFor="" className="form-label label-container">State</label>
            <input type="state" className="form-control state-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
          <div className="state-zip">
            <label htmlFor="" className="form-label label-container">Zip Code</label>
            <input type="zip" className="form-control zip-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
        </div>

        <div className="card-container">
          <div className="card-ccv">
            <label htmlFor="" className="form-label label-container">Debit/Credit</label>
            <input type="address" className="form-control" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
          <div className="card-ccv">
            <label htmlFor="" className="form-label label-container">CCV</label>
            <input type="name" className="form-control ccv-form" placeholder="" id="" /* onChange={}  */ aria-describedby="nameHelp" />
          </div>
        </div>

        <br></br>
        <div className="buttons-container">
          <div style={{ textAlign: 'center' }}><button style={{ marginBottom: 20 }} type="submit" className="btns btn button-container btn-lg">Pay with Paypal</button></div>
          <div style={{ textAlign: 'center' }}><button style={{ marginBottom: 20 }} type="submit" onClick={onSubmit} className="btns btn button-container btn-lg">Confirm Payment</button></div>
          <div style={{ textAlign: 'center' }}><button style={{ marginBottom: 20 }} type="submit" className="btns btn button-container btn-lg">Cancel</button></div>
        </div>

      </div>
    </div>
  )
}

export default PaymentInformation