import Navbar from "../components/Navbar";
import Member1 from "../assets/Member1.jpeg";
import "../components/Profile.css";

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="profile">
                <img src={Member1} alt="member1" className="pfp"/>
            </div>
        </div>
    )
};

export default Profile;