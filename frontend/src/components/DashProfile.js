import GojoPfp from '../assets/gojo.jpeg';
import BulbIcon from '../assets/lightbulb_icon.png';
import StarIcon from '../assets/star_img.jpg';
import '../components/DashProfile.css';

const DashProfile = () => {
    return (
    <div>
        <div className="content">
            <div className="info">
                <h1>Alfredo Ruiz</h1>
                <div className="titles">
                    <h3>City</h3>
                    <h3>Year Joined</h3>
                </div>
                <div className="locationyear">
                    <p>Houston, TX</p>
                    <p>2023</p>
                </div>
                <div className="bio">
                    <p>I am a junior Computer Science student at the University of Houston.</p>
                </div>
                <div className="interests">
                    <img src={StarIcon} alt="icon" />
                    <div className="interests-info">
                        <h3>Interests</h3>
                        <p>Music, Gym, Coding</p>
                    </div>
                </div>
                <div className="fun-facts">
                    <img src= {BulbIcon} alt="icon" />
                    <div className="fun-facts-info">
                        <h3>Fun Facts</h3>
                        <p>Youngest Child, Favorite Movie is Interstellar</p>
                    </div>
                </div>
            </div>
            <div className="pfp">
                <img src= {GojoPfp} alt="gojopfp"/>
            </div>
        </div>
    </div>
    )
};

export default DashProfile;