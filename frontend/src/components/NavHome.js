import  ReactDOM  from "react-dom"
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navhome.css';
import AlpacaLogo from '../assets/Alpaca_logo.png';

export default function NavHome() {

  return (
        <nav className="Parent-Nav">
            <nav className="Parent-Nav">
                <div className="nav-inner">
                    <span className="logo">
                        <img src = {AlpacaLogo} alt="logo"></img>
                        <div className="dd"> <Link to="/">Digital Dash</Link> </div>
                    </span>
            
                    <div className="links">
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
        </nav>
  )
}
