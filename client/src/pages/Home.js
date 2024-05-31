import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Home = () => {
    const history = useHistory();

    const handleLogout = () => {
        AuthService.logout();
        history.push('/login');
    };

    return (
        <div>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
