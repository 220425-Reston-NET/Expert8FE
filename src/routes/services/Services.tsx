import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../../store/Add';
import './Services.css'

function Services() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userlist = useSelector((state : any) => state.counter.value)

  const ChooseAnxiety = () =>
  {
    dispatch(addService({
      pID : userlist.pid,
      mhsID : 1,
      mhpID : 1
    }))
    
    navigate('/choose-specialist')
  }

  const ChooseDepression = () =>
  {
    dispatch(addService({
      pID : userlist.pid,
      mhsID : 2,
      mhpID : 2
    }))
    
    navigate('/choose-specialist')
  }

  const ChooseRelationship = () =>
  {
    dispatch(addService({
      pID : userlist.pid,
      mhsID : 3,
      mhpID : 3
    }))
    
    navigate('/choose-specialist')
  }
  const goToDashboard = () => {
      navigate('/dashboard');
  };

  return (
    <div>
      <button style={{marginLeft: 20}} type="submit"  onClick={goToDashboard} className="btn button-container btn-lg">Go Back</button>
      <h1>How can we help?</h1>
      <h1>How are you feeling?</h1>
      <div className='services-container'>
        <div className='servtwo-container'>
        <a href="https://imgur.com/xeu1j3d"><img style={{width: 400, height: 400}} src="https://i.imgur.com/xeu1j3d.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" onClick={ChooseAnxiety} className="btn btn-container btn-lg">Relationship</button>
        </div>
        <div className='servone-container'>
        <a href="https://imgur.com/NcegnNA"><img style={{width: 400, height: 400}} src="https://i.imgur.com/NcegnNA.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" onClick={ChooseDepression} className="btn btn-container btn-lg">Anxiety</button>
        </div>
        <div className='servthree-container'>
        <a href="https://imgur.com/gl5Rbp5"><img style={{width: 400, height: 400}} src="https://i.imgur.com/gl5Rbp5.png" title="source: imgur.com" /></a>
        <br></br>
          <button type="submit" onClick={ChooseRelationship} className="btn btn-container btn-lg">Depression</button>
        </div>
      </div>
    </div>
  )
}

export default Services