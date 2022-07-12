import React from 'react'
import './Chats.css'

function Chats() {
    return (
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
    )
}

export default Chats