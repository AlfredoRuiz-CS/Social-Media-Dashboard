import Navbar from '../components/Navbar';
import DashProfile from '../components/DashProfile';
import Account from '../components/Account';
import Footer from '../components/Footer';
import X from '../assets/x.png';
import TT from '../assets/tt.png';
import FB from '../assets/fb.png';
import IG from '../assets/ig.png';
import '../components/Dash.css';
// import performScraping from '../webScraper';
import { useState, useEffect } from 'react';

const X_SM = {
    socialMedia: X,
    data: {
        postCount: 70,
        following: 189,
        followers: 112,
        likes: 107
    }
};

const IG_SM = {
    socialMedia: IG,
    data: {
        postCount: 12,
        following: 108,
        followers: 641,
        likes: 140
    }
};

const FB_SM = {
    socialMedia: FB,
    data: {
        postCount: 45,
        following: 124,
        followers: 350,
        likes: 156
    }
};

const TT_SM = {
    socialMedia: TT,
    data: {
        postCount: 30,
        following: 139,
        followers: 105,
        likes: 163
    }
};

const Dash = () => {
    const [XData, setXData] = useState(null);
    const [IGData, setIGData] = useState(null);
    const [FBData, setFBData] = useState(null);
    const [TTData, setTTData] = useState(null);
    
    return (
        <div>
            <Navbar />
            <DashProfile />
            <div className="accounts-section">
                <h1>Accounts</h1>
                <div className="divider"></div>
                <div className="accounts-list">
                    <div className="x_ig">
                        <Account {...X_SM} />
                        <Account {...IG_SM} /> 
                    </div>
                    <div className="fb_tt">
                        <Account {...FB_SM} />
                        <Account {...TT_SM} />
                    </div>
                </div>
            </div>
            <Footer />     
        </div>
    )
};

export default Dash;