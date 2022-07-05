import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {

    const navigate = useNavigate();

    let useremail: any ='';
    let userpassword : any ='';

    const [isfailed, setfailed] = useState(false);

    function Getuseremail(e: any) {
        useremail = e.target.value;
        console.log(useremail);
      }
    
      function Getuserpassword(e: any) {
        userpassword = e.target.value;
        console.log(userpassword);
      }
    
    const goToCreateAccount = () => {
        navigate('/create-account');
    };
    const goToDashboard = () => {
        navigate('/dashboard');
    };

    async function onSubmit(e: any) {
        e.preventDefault();
    await fetch(
        "http://expert8env-env.eba-q62pjcac.us-east-1.elasticbeanstalk.com/searchpatientbyemailandpassword?" +
          new URLSearchParams({
            email: useremail,
            password: userpassword
          })
        
      )
        .then((response) => response.json())
          .then((response => {
          // change/ attached user to user id in db
          

          console.log(response);

          goToDashboard();
  
          setfailed((prev) => false);
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
            <br></br>
            <br></br>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label label-container">Email address</label>
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