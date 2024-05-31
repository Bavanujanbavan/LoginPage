import axios from 'axios';

const AuthService = {
    login: async (username, password) => {
        const response = await axios.post('/api/auth/login', { username, password });
        localStorage.setItem('token', response.data.token);
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default AuthService;
