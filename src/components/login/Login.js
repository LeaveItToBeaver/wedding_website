import '../login/login-styles.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className='login-form'>
                <div className='form-container'>
                    <h1 className='login-text'>Sign In To See Data</h1>
                    <label className='user-text'>Username</label><br></br>
                    <input
                        type="text"
                        name="username"
                        className="login-input" />
                    <label className='pass-text'>Password</label><br></br>
                    <input
                        type="text"
                        name="username"
                        className="login-input" />
                    <br></br>
                    <input type="submit" value="Sign In" className="login-btn" />
                </div>
            </div>
        </div>
    )
}

export default Login