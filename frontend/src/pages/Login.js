import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import NavHome from '../components/NavHome'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import '../components/Login.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/dash');
        await login(email, password)
    }

    const [message] = useTypewriter({
        words: ['Welcome Back!', 'Your Accounts have Missed You'],
        loop: true
    });

    return (
        <div>
            <Navbar />
            <form className="login" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <label className="email">Email:</label>
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
                <button disabled={isLoading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form>
            <h2 className="login-msg"> {message} 
                <span className="cursor">
                    <Cursor/>
                </span>
            </h2>
        </div>
    )
}

export default Login