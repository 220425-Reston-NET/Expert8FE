import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Chats.css'

function Chats() {

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            <button style={{marginLeft: 20}} type="submit"  onClick={goToDashboard} className="btn button-container btn-lg">Go Back</button>
        <div className='chats-container'>
            <div className='column-container'>
                Your Chats
            </div>
            <div className='nxt-col-container'>
            </div>
            <div className='final-col-container'>
                <div className='l-cont'>
                    You're chatting with:
                </div>
                <div className='l-cont-two'>
                    <ul className="list-group">
                        <li className="list-group-item"><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Dr.Person</button></li>
                        <li className="list-group-item"><button style={{marginBottom: 20}} type="submit" className="btn button-container btn-lg">Dr.Human</button></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chats