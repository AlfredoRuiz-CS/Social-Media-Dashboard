import Navbar from "../components/Navbar";
import Member1 from "../assets/Member1.jpeg";
import GojoIcon from "../assets/gojo.jpeg";
import "../components/Profile.css";

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="profile">
                <img src={GojoIcon} alt="member1" className="pfp"/>
            </div>
        </div>
    )
};

export default Profile;