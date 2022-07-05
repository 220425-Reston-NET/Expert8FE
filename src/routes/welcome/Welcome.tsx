import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Welcome.css'
import './jscript2'
import './jscript'
// import './flickity.pkgd.min.js'
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

      function reveal2v2() {
        var reveals = document.querySelectorAll(".reveal2v2");
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
      window.addEventListener("scroll", reveal2v2);

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

      function reveal3v2() {
        var reveals = document.querySelectorAll(".reveal3v2");
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
      window.addEventListener("scroll", reveal3v2);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible =0;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);

      const navigate = useNavigate();

      const gotologin = () =>
      {
            navigate('/login')
      }

      const test = () =>
      {
        window.scrollTo(0,900)
      }

      const test1 = () =>
      {
        window.scrollTo(0,1600)
      }

      const test2 = () =>
      {
        window.scrollTo(0,2670)
      }
      const test3 = () =>
      {
        window.scrollTo(0,3780)
      }
      
      
      

      
    return (
        <body>
            <div className='column-layout'>
                <div className='left-side-container'>
                   Welcome
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
                <button type="button" className="btn btn-outline-success btn-lg" onClick={test1} style={{margin: 'auto'}}>Connect</button>
                <button type="button" className="btn btn-outline-warning btn-lg" onClick={test2} style={{margin: 'auto'}}>Our Services</button>
                <button type="button" className="btn btn-outline-info btn-lg" onClick={test3} style={{margin: 'auto'}}>Trends</button>
            </div>

        <div className="content">   
        <div className="textBody">
            <div className="section1 reveal2" id="about">
                <h2>Who are Mental One?</h2>
                <div className="blueBar"></div>
                <p>We are a mental health institution that our purpose is to help individuals with their mental health. Mental health has become one of the major health issues in society. However, there are very limited access and services to cater to the needs of the public. We aims to develop serices where patients can access resources and services for mental health.</p>
                <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} type="submit" onClick={gotologin} className="btn btn-light btn-lg">Schedule an Appointment</button>
            </div>
            <img src="https://i.imgur.com/bY1Rrs8.png" className="sideImage1 reveal3"/>
        </div>

        <div className="textBody">
            <div className="section1 reveal3v2" id="about">
                <h2>Connect Around You</h2>
                <div className="blueBar"></div>
                <p>There are many services avaliable to you. Knowing these sevices can help you during tough times</p>
                <p>Please reach out to us too so we can help</p>
                <p>MentalOne Phone: 201-212-3344</p>
                <p>MentalOne Email: MentalOne@health.com</p>
                <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} type="submit" onClick={gotologin} className="btn btn-light btn-lg">Schedule an Appointment</button>
            </div>
            <img src="https://preview.redd.it/j2pml5o9od501.jpg?width=640&crop=smart&auto=webp&s=f481f1f7b85774d5c279e2408ca20e169d9c6ba3" className="sideImage1 reveal2v2"/>
        </div>

        <div className="miniContainer reveal" id="project">
            <h2>Our Services</h2>
            <div className="blueBar"></div>
            <div className="whiteCard">
                <div className="whiteCardText">
                    <h2>Anxiety</h2>
                    <p>Glitched is a bot that automates freebies checkouts and monitors price errors and deals. This bot is aimed to help resellers increase their profits even further while in Profit Lounge.</p>
                    <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} className="btn btn-light btn-lg">More Information on Anxiety</button>
                </div>
            </div>

            <div className="whiteCard">
                <div className="whiteCardText">
                    <h2>Depression</h2>
                    <p>Glitched is a bot that automates freebies checkouts and monitors price errors and deals. This bot is aimed to help resellers increase their profits even further while in Profit Lounge.</p>
                    <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} className="btn btn-light btn-lg">More Information on Depression</button>
                </div>
            </div>

            <div className="whiteCard">
                <div className="whiteCardText">
                    <h2>Relationship Counseling</h2>
                    <p>Glitched is a bot that automates freebies checkouts and monitors price errors and deals. This bot is aimed to help resellers increase their profits even further while in Profit Lounge.</p>
                    <button style={{color: 'rgb(4, 189, 189)', borderColor: 'rgb(4, 189, 189)'}} className="btn btn-light btn-lg">More Information on Relationship Counseling</button>
                </div>
            </div>

            <div className="miniContainer reveal" id="testimonial">
            <h2>Current State of Mental Health</h2>
            <div className="blueBar"></div>
            <br></br>
            <img style={{ width: 125 }} src="https://majorleagueuniversity.com/wp-content/uploads/2021/07/053018-Mental-Health.jpg"/>
            <div className="gallery js-flickity">
                <br></br>
                <div className="gallery-cell">
                    <p>In 2019, just prior to the COVID-19 pandemic, 19.86% of adults experienced a mental illness, equivalent to nearly 50 million Americans.  ​</p>
                    <p>@azulpepper</p>
                </div>
                <div className="gallery-cell">
                    <p>Suicidal ideation continues to increase among adults in the U.S. 4.58% of adults report having serious thoughts of suicide. The national rate of suicidal ideation among adults has increased every year since 2011-2012.​</p>
                    <p>@Yrod17</p>
                </div>
                <div className="gallery-cell">
                    <p>A growing percentage of youth in the U.S. live with major depression. 15.08% of youth experienced a major depressive episode in the past year.​</p>
                    <p>@kwue</p>
                </div>
                <div className="gallery-cell">
                    <p>Over 2.5 million youth in the U.S. have severe depression, and multiracial youth are at greatest risk. 10.6% of youth in the U.S. have severe major depression (depression that severely affects functioning). The rate of severe depression was highest among youth who identified as more than one race, at 14.5% (more than one in every seven multiracial youth).</p>
                    <p>@Sadge</p>
                </div>
                <div className="gallery-cell">
                    <p>Over half of adults with a mental illness do not receive treatment, totaling over 27 million adults in the U.S. who are going untreated.</p>
                    <p>@.shane.french05</p>
                </div>
                <div className="gallery-cell">
                    <p>The percentage of adults with a mental illness who report unmet need for treatment has increased every year since 2011. In 2019, 24.7% of adults with a mental illness report an unmet need for treatment. </p>
                    <p>@.shane.french05</p>
                </div>
                <div className="gallery-cell">
                    <p>Over 60% of youth with major depression do not receive any mental health treatment. Even in states with the greatest access, nearly one in three are going without treatment. </p>
                    <p>@.shane.french05</p>
                </div>
                <div className="gallery-cell">
                    <p>Both adults and youth in the U.S. continue to lack adequate insurance coverage. 11.1% of Americans with a mental illness are uninsured. There was a 0.3% increase from last year’s dataset, the second year in a row that this indicator increased since the passage of the Affordable Care Act (ACA). ​</p>
                    <p>@.shane.french05</p>
                </div>
                <div className="gallery-cell">
                    <p>8.1% of children had private insurance that did not cover mental health services, totaling 950,000 youth. </p>
                    <p>@.shane.french05</p>
                </div>

                <div className="gallery-cell">
                    <p>Rates of substance use are increasing for youth and adults, even prior to the COVID-19 pandemic. 7.74% of U.S. adults and 4.08% of youth had a substance use disorder in the past year. Substance use increased 0.07% for adults and 0.25% for youth over last year’s report. </p>
                    <p>@.shane.french05</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="gradientBlock"></div>
    <footer>
        <img src="https://i.imgur.com/bY1Rrs8.png" style={{ width: 125 }}  alt="footerLogo"  />
        <p className='right-side-container'>Copyright @2022.All Rights Reserved.</p>
    </footer>
        </body>
    )
}

export default Welcome


