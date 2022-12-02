import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, logout} from '../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../login/login-styles.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading){
            return;
        }
        //if (user) navigate("/RSVP");
    }, [user, loading]);

    return (
        <div className="login-container">
            <div className='login-form'>
                <div className='form-container'>
                    {
                        user ? <h1 className='login-text'> You are logged in already</h1> 
                        : <h1 className='login-text'>Sign In to see data, if you don't have an account then you can't. :P</h1>
                    }
                    <label className='user-text'>Email</label>
                    <br></br>
                    <input
                        type="text"
                        name="username"
                        className="login-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label className='pass-text'>Password</label>
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        className="login-input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <br></br>
                    {
                        user ?
                        <button type="submit" 
                            value="Sign In" 
                            className="login-btn"
                            onClick={() => logout()}>
                            Log Out
                        </button> 
                        : 
                        <button type="submit" 
                            value="Sign In" 
                            className="login-btn"
                            onClick={() => logInWithEmailAndPassword(email, password)}>
                            Sign in
                        </button>
                            
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;