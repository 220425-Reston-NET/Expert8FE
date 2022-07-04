import React from 'react'
import './Services.css'

function Services() {

  return (
    <div>
      <h1>How can we help?</h1>
      <h1>How are you feeling?</h1>
      <div className='services-container'>
        <div className='servone-container'>
          <button type="submit" className="btn btn-container btn-lg">Relationship</button>
        </div>
        <div className='servtwo-container'>
          <button type="submit" className="btn btn-container btn-lg">Anxiety</button>
        </div>
        <div className='servthree-container'>
          <button type="submit" className="btn btn-container btn-lg">Depression</button>
        </div>
      </div>
    </div>
  )
}

export default Services