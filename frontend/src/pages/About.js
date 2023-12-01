import Members from '../components/Member.js';
import '../components/About.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import Member1pic from '../assets/Member1.jpeg'
import Member2pic from '../assets/Member2.jpeg'
import Member3pic from '../assets/Member3.jpeg'
import Member4pic from '../assets/Member4.jpeg'
import Member5pic from '../assets/Member5.jpg'

const Member1 = {
  profileImage: Member1pic,
  name: 'Alfredo Ruiz',
  bio: 'I am a junior Computer Science student at the University of Houston. ',
  interests: ['Food enthusiast', 'Music', 'Working Out'],
  funFacts: ['Youngest Sibling', 'Favorite Movie is Interstellar', 'Got stung by a Jellyfish'],
};

const Member2 = {
  profileImage: Member2pic,
  name: 'Michael Banes',
  bio: 'Hi, I am a freshman majoring in computer Science at the University of Houston.',
  interests: ['Basketball', 'Music', 'Art'],
  funFacts: ['Oldest sibling', 'Taurus', 'Hates Chocolate'],
};

const Member3 = {
    profileImage: Member3pic,
    name: 'Santiago Ramos',
    bio: 'My name is Santiago Ramos. I am junior computer science student that enjoys taking on challenges.',
    interests: ['Football', 'Chess', 'Reading'],
    funFacts: ['books over movies', 'I have 2 dogs', 'My bike is yellow'],
};

const Member4 = {
  profileImage: Member4pic,
  name: 'Elian Gonzalez',
  bio: 'Hello, I am a junior majoring in computer science at the University of Houston.',
  interests: ['Coffee Enjoyer', 'Video Game Addict', 'Sleep Lover'],
  funFacts: ['Oldest Sibling', 'Left Handed', 'Gemini'],
};

const Member5 = {
    profileImage: Member5pic,
    name: 'Ethan Wu',
    bio: 'Howdy, I am a freshman majoring in Computer Science at the University of Houston.',
    interests: ['Gym Enjoyer', 'Video Game Addict', 'Anime Watcher'],
    funFacts: ['Right Handed', 'I live on Earth', 'I love Oxygen']
}

function About(){ 
  return (
    <div>
        <Navbar />
        <div className="members-top">
            <div className='Member_One'>
                <Members {...Member1} />
            </div>
            <div className='Member_Two'>
                <Members {...Member2} />
            </div>
            <div className='Member_Three'>
                <Members {...Member3} />  
            </div>
        </div>
        <div className="members-bottom">
            <div className='Member_Four'>
                <Members {...Member4} />  
            </div>
            <div className='Member_Five'>
                <Members {...Member5} /> 
            </div>
        </div>
        <div className="footer-about">
            <Footer />
        </div>
    </div>
  );
}

export default About;