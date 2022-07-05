import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Welcome.css'
import './jscript2'
import './jscript'
// import './styles.css'

function Welcome() {

    function reveal2() {
        var reveals = document.querySelectorAll(".reveal2");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible =0;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
          } else {
            reveals[i].classList.remove("active2");
          }
        }
      }
      window.addEventListener("scroll", reveal2);

      function reveal3() {
        var reveals = document.querySelectorAll(".reveal3");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible =0;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active3");
          } else {
            reveals[i].classList.remove("active3");
          }
        }
      }
      window.addEventListener("scroll", reveal3);

      

      const test = () =>
      {
        window.scrollTo(0,1000)
      }

      
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
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={test} style={{margin: 'auto'}}>About Us</button>
                <button type="button" className="btn btn-outline-success btn-lg" style={{margin: 'auto'}}>Connect</button>
                <button type="button" className="btn btn-outline-warning btn-lg" style={{margin: 'auto'}}>Our Services</button>
                <button type="button" className="btn btn-outline-info btn-lg" style={{margin: 'auto'}}>Trends</button>
            </div>

        <div className="content">   
        <div className="textBody">
            <div className="section1 reveal2" id="about">
                <h2>Who are Mental One?</h2>
                <div className="blueBar"></div>
                <p>We are a mental health institution that our purpose is to help individuals with their mental health. Mental health has become one of the major health issues in society. However, there are very limited access and services to cater to the needs of the public. We aims to develop serices where patients can access resources and services for mental health.</p>
                <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} type="submit" className="btn btn-light btn-lg">Schedule an Appointment</button>
            </div>
            <img src="https://i.imgur.com/bY1Rrs8.png" className="sideImage1 reveal3"/>
        </div>
        </div>
        </div>
    )
}

export default Welcome


