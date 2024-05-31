import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthService from './services/AuthService';

const App = () => {
    return (
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/home" render={() => (
                AuthService.isAuthenticated() ? <Home /> : <Redirect to="/login" />
            )} />
            <Route exact path="/" render={() => (
                AuthService.isAuthenticated() ? <Redirect to="/home" /> : <Redirect to="/login" />
            )} />
        </Router>
    );
};

export default App;
