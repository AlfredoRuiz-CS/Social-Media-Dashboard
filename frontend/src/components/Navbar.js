import  ReactDOM  from "react-dom"
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AlpacaLogo from '../assets/Alpaca_logo.png';

export default function Navbar() {

  return (
        <nav className="Parent-Nav">
            <div className="nav-inner">
                <span className="logo">
                    <img src = {AlpacaLogo} alt="logo"></img>
                    <div className="dd"> <Link to="/">Digital Dash</Link> </div>
                </span>

                

                <div className="links">
                    <Link to="/dash">Dash</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>
        </nav>

  )
}
