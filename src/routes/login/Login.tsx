import { Http2ServerResponse } from 'http2';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {Patient} from '../../models/Patient'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/counter';

function Login() {


  const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const[validation, setvalidation] = useState({} as Patient)
    const [isfailed, setfailed] = useState(false);

    function Getuseremail(e: any) {
        validation.email = e.target.value;
        console.log(validation.email);
      }
    
      function Getuserpassword(e: any) {
        validation.password = e.target.value;
        console.log(validation.password);
      }
    
    const goToCreateAccount = () => {
        navigate('/create-account');
    };
    

    async function onSubmit(e: any) {
        e.preventDefault();
    await fetch(
        "http://expert8env-env.eba-q62pjcac.us-east-1.elasticbeanstalk.com/searchpatientbyemailandpassword?" +
          new URLSearchParams({
            email: validation.email,
            password: validation.password
          }),
    
        
      )
        .then(response => 
          {
            if (response.status == 200)
            {
              return response.json();
            }
            else
            {
              setfailed((prev) => true);

              throw `error with status ${response.status}`
            }
          })
            
          
          .then((data => {
          // change/ attached user to user id in db
          
           
              setfailed((prev) => false);
              console.log(data);
              setvalidation(data);
              dispatch(addUser(data));
              
              navigate('/dashboard', {
                state: {
                  ...data
                },
              });
    
            
          
        }), () => {

            setfailed((prev) => true);
        }
         );


    }
    //end of onSubmit



    

    return (
        <div className='login-container'>
            <form className='form-container' onSubmit={onSubmit}>
            <h1  className='welcome-container'>Welcome</h1>
            <div className="blueBar"></div>
            <br></br>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label label-container">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={Getuseremail} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label label-container">Password</label>
                    <input type="password" className="form-control" onChange={Getuserpassword} id="exampleInputPassword1"/>
                    {
                  isfailed && <span style={{color : 'red'}}>User was not found</span>
                }
                </div>
                <div className="mb-3 form-check">
                </div>
                <div style={{textAlign: 'center'}}><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Submit</button></div>
                <div style={{textAlign: 'center'}}><button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} type="submit" className="btn btn-light btn-lg">Forgot Password?</button></div>
                <div style={{textAlign: 'center'}}><button onClick={goToCreateAccount} style={{marginTop: 20}} type="submit" className="btn button-container btn-lg">Dont have an account? Sign Up!</button></div>
            </form>
            </div>
    )

    
}

export default Login