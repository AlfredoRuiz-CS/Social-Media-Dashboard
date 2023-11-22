import  ReactDOM  from "react-dom"
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AlpacaLogo from '../assets/Alpaca_logo.png';

export default function Navbar() {

  return ReactDOM.createPortal( (
        <nav>
            <div className="nav-inner">
                <span className="logo">
                    <img src = {AlpacaLogo}></img>
            
                </span>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>

  ),document.body)
}
