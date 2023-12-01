import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Navbar from "../components/Navbar"
import "../components/Signup.css"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

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
    </div>
  )
}

export default Signup