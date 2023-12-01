import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import "../components/Signup.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Footer from  "../components/Footer"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/dash');
    await signup(email, password)
  }
  
  const [message] = useTypewriter({
    words: ['The Perfect Dashboard for Everything You!'],
    loop: true
  });

  return (
    <div>
        <Navbar />
        <form className="signup" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            
            <label className="email">Email Address:</label>
            <input className="email-in"
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
            />
            <label className="pass">Password:</label>
            <input className="pass-in" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
            />

            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
        <h2 className="signup-msg"> {message} 
            <span className="cursor">
                <Cursor/>
            </span>
        </h2>
        <Footer />
    </div>
  )
}

export default Signup