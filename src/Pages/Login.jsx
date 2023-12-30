import React, { useState } from 'react';
import './CSS/SignupForm.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Login</h2>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="form-group-forgetpassword">
                    <label>
                        <Link to='/login'>Forget password</Link>
                    </label>
                </div>
                <div className='form-group-checkbox'>
                    <input type="checkbox" name="" id="" />
                    <p> I agree to the terms of service and privacy policy</p>
                </div>
                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default Login;
