import Navbar from "../components/Navbar";
import Member1 from "../assets/Member1.jpeg";
import GojoIcon from "../assets/gojo.jpeg";
import "../components/Profile.css";
import Footer from "../components/Footer.js";
import { useState, useEffect } from 'react'
// import "../webScraper";


const Profile = () => {
    let items = ["Twitter", "Facebook", "TikTok", "Instagram"];
    // const [username, setUsername] = useState('');

    // const onClick = async (e) => {
    //     e.preventDefault()

    //     await performScraping(username)
    // }

    return (
        <div>
            <Navbar />
            <div className="profile-icon">
                <img src={GojoIcon} alt="member1" className="pfp"/>
            </div>
            <div className="profile-list">
                <h1>Accounts List</h1>  
                <ul className="list-group">
                    {items.map((item, index) => (
                    <div className="list-item" key={index}>
                        <li>
                            <label>{item} @</label>
                            <input 
                                type="username"
                                // onChange={(e) => setUsername(e.target.value)}
                                // value={username}
                             />
                        </li>
                    </div>
                    ))}
                </ul>
                <div className="buttons">
                    <button> Add Account </button>
                    <button> Remove Account </button>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;