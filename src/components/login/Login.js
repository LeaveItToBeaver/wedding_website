import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from '../../Firebase';
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
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className="login-container">
            <div className='login-form'>
                <div className='form-container'>
                    <h1 className='login-text'>Sign In To See Data, if you don't have an account then you can't. :P</h1>
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
                        type="text"
                        name="username"
                        className="login-input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <br></br>
                    <button type="submit" 
                        value="Sign In" 
                        className="login-btn"
                        onClick={signInWithGoogle}>
                            Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;