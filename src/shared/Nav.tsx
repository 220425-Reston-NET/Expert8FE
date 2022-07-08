
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className="nav-container">
            <div className='flex-container'>
                <Link to="/" className="navbar-brand"><a href="https://imgur.com/bY1Rrs8"><img style={{ width: 125 }} src="https://i.imgur.com/bY1Rrs8.png" title="source: imgur.com" /></a></Link>
            </div>
            <div className='search-container'>
            <form className="d-flex" role="search">
                    <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="drop-container">
                    <button className="btn btn-light btn-lg dropdown-toggle drop-container" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#"><Link to="/login" className="nav-link">Login</Link></a></li>
                        <li><a className="dropdown-item" href="#"><Link to="/create-account" className="nav-link">Create Account</Link></a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
        </nav>
    )
}

export default Nav