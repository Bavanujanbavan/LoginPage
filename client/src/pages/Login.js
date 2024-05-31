import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        try {
            await AuthService.login(username, password);
            history.push('/home');
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
