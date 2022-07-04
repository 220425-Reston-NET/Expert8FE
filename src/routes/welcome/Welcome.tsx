import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
    return (
        <div>
            <div className='column-layout'>
                <div className='left-side-container'>
                    <h1 style={{ fontWeight: 'bold', fontSize: 55 }}>Welcome</h1>
                    <p className='text-container'>We are here for you.<br />We see you.<br />We can help you.</p>
                </div>
                <div className="img-container">
                <a href="https://imgur.com/wxSaEhG"><img src="https://i.imgur.com/wxSaEhG.png" title="source: imgur.com" /></a>
                </div>
                <div className='right-side-container'>
                </div>
            </div>
            <div className='bottom-container'>
                <button type="button" className="btn btn-outline-primary btn-lg" style={{margin: 'auto'}}>About Us</button>
                <button type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>Connect</button>
                <button type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>Our Services</button>
                <button type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Trends</button>
            </div>
        </div>
    )
}

export default Welcome


