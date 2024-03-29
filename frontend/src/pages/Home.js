import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from '../components/Navbar.js'
import AlpacaLogo from '../assets/Alpaca_logo.png';
import '../components/Home.css';
import Footer from '../components/Footer.js'

const Home = () => {
    const [text] = useTypewriter({
        words: ['Welcome', 'This is Digital Dash', 'API Alpacas Project'],
        loop: true
    });

    const [message] = useTypewriter({
        words: ['Manage all your accounts in one place'],
        loop: true
    });

    return (
        <div className="site">
            <Navbar />
            <div className="home-container">
                <img src={AlpacaLogo} alt="logo" className="home-logo"/>
                <h1 className="home-welcome">{text}
                    <span className="cursor">
                        <Cursor/>
                    </span>
                </h1>
                <h1 className="home-tagline"> {message} 
                    <span className="cursor">
                        <Cursor/>
                    </span>
                </h1>
            </div>  
            <Footer /> 
        </div>
    )
}

export default Home;
