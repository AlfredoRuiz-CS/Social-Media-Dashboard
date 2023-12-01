import  ReactDOM  from "react-dom"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import AlpacaLogo from '../assets/Alpaca_logo.png';
import { useLogout } from '../hooks/useLogout.js';
import { useAuthContext } from '../hooks/useAuthContext.js';

export default function Navbar() {
    const { logout } = useLogout();
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
        navigate('/');
    }

  return (
        <nav className="Parent-Nav">
            <div className="nav-inner">
                <span className="logo">
                    <img src = {AlpacaLogo} alt="logo"></img>
                    <div className="dd"> <Link to="/">Digital Dash</Link> </div>
                </span>

                {!user && (<div className="links">
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                </div>
                )}

                {user && (<div className="links">
                    <Link to="/dash">Dash</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link>
                    <Link to="/" onClick={handleClick}>Logout</Link>
                </div>
                )}
            </div>
        </nav>

  )
}
