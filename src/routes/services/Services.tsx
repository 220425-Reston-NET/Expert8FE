import React from 'react'
import './Services.css'

function Services() {

  return (
    <div>
      <h1>How can we help?</h1>
      <h1>How are you feeling?</h1>
      <div className='services-container'>
        <div className='servtwo-container'>
        <a href="https://imgur.com/xeu1j3d"><img style={{width: 400, height: 400}} src="https://i.imgur.com/xeu1j3d.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" className="btn btn-container btn-lg">Relationship</button>
        </div>
        <div className='servone-container'>
        <a href="https://imgur.com/NcegnNA"><img style={{width: 400, height: 400}} src="https://i.imgur.com/NcegnNA.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" className="btn btn-container btn-lg">Anxiety</button>
        </div>
        <div className='servthree-container'>
        <a href="https://imgur.com/gl5Rbp5"><img style={{width: 400, height: 400}} src="https://i.imgur.com/gl5Rbp5.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" className="btn btn-container btn-lg">Depression</button>
        </div>
      </div>
    </div>
  )
}

export default Services