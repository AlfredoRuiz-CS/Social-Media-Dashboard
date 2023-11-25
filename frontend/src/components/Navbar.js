import  ReactDOM  from "react-dom"
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AlpacaLogo from '../assets/Alpaca_logo.png';

export default function Navbar() {

  return ReactDOM.createPortal( (
        <nav className="Parent-Nav">
            <div className="nav-inner">
                <span className="logo">
                    <img src = {AlpacaLogo}></img>
                    <div> <Link to="/dash">Digital Dash</Link> </div>
                </span>

                

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/dash">Dash</Link>
                    <Link to="/about">About</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </nav>

  ),document.body)
}
