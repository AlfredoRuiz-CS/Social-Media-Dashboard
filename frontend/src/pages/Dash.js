import Navbar from '../components/Navbar';
import DashProfile from '../components/DashProfile';
import Account from '../components/Account';
import Footer from '../components/Footer';
import X from '../assets/x.png';
import TT from '../assets/tt.png';
import FB from '../assets/fb.png';
import IG from '../assets/ig.png';
import '../components/Dash.css';

const X_SM = {
    socialMedia: X
};

const IG_SM = {
    socialMedia: IG
};

const FB_SM = {
    socialMedia: FB
};

const TT_SM = {
    socialMedia: TT
};

const Dash = () => {
    
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