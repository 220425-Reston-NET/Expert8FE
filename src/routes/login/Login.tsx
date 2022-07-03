import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {

    const navigate = useNavigate();
    
    const goToCreateAccount = () => {
        navigate('/create-account');
    };

    return (
        <div className='login-container'>
            <form className='form-container'>
            <h1 className='welcome-container'>Welcome</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label label-container">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label label-container">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
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