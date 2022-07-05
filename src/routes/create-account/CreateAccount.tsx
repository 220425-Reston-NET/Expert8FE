import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { Patient } from '../../models/Patient';

function CreateAccount() {

//   let CusDefault:Patient = {
//     pid : 0,
//     firstName : "",
//     lastName : "",
//     email : "",
//     phone : "",
//     address : "",
//     city : "",
//     state : "",
//     zip : "",
//     password : "",
//     services : [
//         {
//             sid : 0,
//             serviceName : "",
//             prices : [
//                 {
//                     prID : 0,
//                     servicePrice : 0
//                 }
//             ]
//         }
//     ]
// };


const [customer, setcustomer] = useState({} as Patient);
const [ishidden, sethidden] = useState(false);

function insertFirstName(e: any) {
    customer.firstName = e.target.value;
    
}
function insertLastName(e: any) {
  customer.lastName = e.target.value;
  
}
function insertEmail(e: any) {
  customer.address = e.target.value;
  
}
function insertPhone(e: any) {
    customer.phone = e.target.value;
}
function insertAddress(e: any) {
    customer.address = e.target.value;
}
function insertCity(e: any) {
    customer.city = e.target.value;
}
function insertState(e: any) {
    customer.state = e.target.value;
}
function insertZip(e: any) {
    customer.zip = e.target.value;
}
function insertPassword(e: any) {
  customer.password = e.target.value;
}



async function onSubmit(e: any) {
    e.preventDefault();

        await fetch("http://expert8env-env.eba-q62pjcac.us-east-1.elasticbeanstalk.com/AddPatient", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
              firstName : customer.firstName,
              lastName : customer.lastName,
              email : customer.email,
              phone : customer.phone,
              address : customer.address,
              city : customer.city,
              state : customer.state,
              zip : customer.zip,
              password : customer.password,
              services : []
        
            }
        )

    
       
    }).then(response => response.json())
        .then((customer:Patient) => {
        
        console.log(customer);    
          
        setcustomer((prev) => customer);


        sethidden((prev) => true);

    }, () => {

        sethidden((prev) => false);
    });
};



  return (
    <div className="create-account-page-container">
      <div className="create-account-container">
      <h1 className="tell-us"><b>Tell us about yourself</b></h1>
                    <div className="name-container">
                      <div className="name">
                      <label htmlFor="" className="form-label label-container">First Name</label>
                      <input type="name" className="form-control" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
                      </div>
                      <div className="name">
                      <label htmlFor="" className="form-label label-container">Last Name</label>
                      <input type="name" className="form-control" id="" /* onChange={}  */ aria-describedby="nameHelp"/>
                      </div>
                    </div>

                    <label htmlFor="" className="form-label label-container">Email address</label>
                    <input type="text" className="form-control"  /* onChange={}  */ aria-describedby=""/>

                    <label htmlFor="" className="form-label label-container">Phone Number</label>
                    <input type="number" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>

                    <div className="address-container-a">
                      <div className="street-city">
                      <label htmlFor="" className="form-label label-container">Street Address</label>
                      <input type="address" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                      <div className="street-city">
                      <label htmlFor="" className="form-label label-container">City</label>
                      <input type="address" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                    </div>

                    <div className="address-container-b">
                      <div className="state-zip">
                      <label htmlFor="" className="form-label label-container">State</label>
                      <input type="address" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                      <div className="state-zip">
                      <label htmlFor="" className="form-label label-container">Zipcode</label>
                      <input type="number" className="form-control" id="" /* onChange={}  */ aria-describedby=""/>
                      </div>
                    </div>

                    <label htmlFor="password" className="form-label label-container">Password</label>
                    <input type="password" className="form-control"  /* onChange={}  */ aria-describedby=""/>

                    <label htmlFor="re-password" className="form-label label-container">Re-enter Password</label>
                    <input type="password" className="form-control"  /* onChange={}  */ aria-describedby=""/>

                    <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" onSubmit={onSubmit} className="btn button-container btn-lg">Submit</button></div>                                                                                                                            
                </div>


    </div>//end of create-account-container

  )//end of return

}//end of CreateAccount()

export default CreateAccount