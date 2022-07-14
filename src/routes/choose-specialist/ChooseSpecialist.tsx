import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../../store/Add';
import './ChooseSpecialist.css'

function ChooseSpecialist() {

    const navigate = useNavigate();
    const [ishidden, sethidden] = useState(false);
    const [ishidden1, sethidden1] = useState(false);
    const dispatch = useDispatch();

    function toggledelilah(){
        sethidden(!ishidden)
        dispatch(addService({
            ssID: 1
            // wID: 0
        }))
        console.log('this might have worked')
    }
    function toggle1meetzoom(){
        sethidden1(!ishidden1)
        dispatch(addService({
            
            wID: 1
        }))
        console.log('this might have worked')
    }

    const goToDashboard = () => {
        navigate('/services');
    };

    const gotoconfirm = () => {
        navigate('/Scheduler')

    };

    return (
        <div className='comp-container'>
            <div className='specialist-container'>
                <p className='p-container'>Which specialist is right for you?</p>
                <div className='row-one-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="" id="flexCheckDefault" onClick={toggledelilah} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        <a href="https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1642223720668-I2XL35T6SMPTDZPOTRFJ/DCP_0085"><img style={{ width: 300 }} src="https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1642223720668-I2XL35T6SMPTDZPOTRFJ/DCP_0085.jpg" title="source: imgur.com" /></a>
                        <h3 className='H3Container1'>Delilah Solace
                        
                        </h3>
                        <div className='H3Container'>Master's degree in Psycology</div>

                        {
                            ishidden && 
                            <div>
                            <h6>Please choose the way you would like to meet</h6>
                            <div className="form-check form-check-inline" style={{marginTop: '0rem'}}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions1" onClick={toggle1meetzoom} id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Zoom</label>
                        </div>
                        
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2" />
                        
                            <label className="form-check-label" htmlFor="inlineRadio2">In Person</label>
                        </div>
                        <div className="form-check form-check-inline" style={{marginBottom: 20}}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Text Messages</label>
                        </div>
                        </div>
                            
                        }
                        {
                            ishidden1 && 
                            <button type="submit"  onClick={gotoconfirm} className="btn button-container btn-lg">Continue</button>

                            
                        }

                        </label>
                    </div>
                </div>
                <div className='row-two-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        <a href="https://nylprofessionals.newyorklife.com/Production/Producer/Image/Standard/Agent_0208708_Image_24620"><img style={{ width: 300 }} src="https://nylprofessionals.newyorklife.com/Production/Producer/Image/Standard/Agent_0208708_Image_24620.jpg" title="source: imgur.com" /></a>
                        <h3 className='H3Container1'>Emerson Kora
                        
                        </h3>
                        <div className='H3Container'>Master's degree in Psycology</div>
                        </label>
                    </div>
                </div>
                <div className='row-three-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        <a href="https://www.faculty.uci.edu/get_image.cfm?faculty_id=5555"><img style={{ width: 300 }} src="https://www.faculty.uci.edu/get_image.cfm?faculty_id=5555" title="source: imgur.com" /></a>
                        <h3 className='H3Container1'>Daniela Wright
                        
                        </h3>
                        <div className='H3Container'>Master's degree in Psycology</div>
                        </label>
                    </div>
                    <div>
                    <button type="submit"  onClick={goToDashboard} className="btn button-container btn-lg">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSpecialist