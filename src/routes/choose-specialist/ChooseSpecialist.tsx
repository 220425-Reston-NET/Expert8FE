import React from 'react'
import './ChooseSpecialist.css'

function ChooseSpecialist() {
    return (
        <div className='comp-container'>
            <div className='specialist-container'>
                <p className='p-container'>Which specialist is right for you?</p>
                <div className='row-one-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            ---------------need img and description------------------
                        </label>
                    </div>
                </div>
                <div className='row-two-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            ---------------need img and description------------------
                        </label>
                    </div>
                </div>
                <div className='row-three-cont'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            ---------------need img and description------------------
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSpecialist