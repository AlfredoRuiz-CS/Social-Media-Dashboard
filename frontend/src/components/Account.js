import X from '../assets/x.png';
import TT from '../assets/tt.png';
import FB from '../assets/fb.png';
import IG from '../assets/ig.png';
import Heart from '../assets/heart_icon.png';
import '../components/Account.css';

const Account = (props) => {
    const { socialMedia, data } = props;

    return (
        <div>
            <div className="component">
                <div className="social-media">
                    <img src={socialMedia} alt="social media" />
                </div>
                <div className="info">
                    <h2>@AlfredoR10</h2>
                    <div className="account-items">
                        <div className="follow">
                            <h3>{data.following} Following</h3>
                            <h3>{data.followers} Followers</h3>
                        </div>
                        <div className="commentsLikes">
                            <h3>{data.postCount} Posts</h3>
                            <div className="likeHeart">
                                <h3>{data.likes} Likes</h3>
                                <img src={Heart} alt="heart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="latest-comment">

            </div> */}
        </div>
    )
};

export default Account;