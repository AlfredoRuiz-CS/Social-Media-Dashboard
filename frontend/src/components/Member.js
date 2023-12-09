//stuff goes here 
import '../components/About.css'

function Member(props){
  const { profileImage, name, bio, interests, funFacts } = props;

  return ( 
    <div className='About_Template'>
      <div className='About_Section'>
        <div className='Profile_Picture'>
          <img src={profileImage} alt='profileImage' />
        </div>
        <div className='Name'>
          <p>{name}</p>
        </div>
        <div className='Bio'>
          <p>{bio}</p>
        </div>
        <div className='Interest_FunFacts_title_Section'>
            <h4 className='Interests_title'>Interests</h4>
            <h4 className='Fun_Facts_title'>Facts</h4> 
        </div>
        <div className='Interest_FunFacts_Section'>
          <ul className='Interests'>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <ul className='Fun_Facts'>
            {funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Member;