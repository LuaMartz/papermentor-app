import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './components/Onboarding/Onboarding';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import Documents from './components/Documents/Documents';
import Profile from './components/Profile/Profile';
import Pizarra from './components/Pizarra/Pizarra';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/onboarding" component={Onboarding} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/reset" component={Reset} />
                <Route path="/documents" component={Documents} />
                <Route path="/profile" component={Profile} />
                <Route path="/pizarra" component={Pizarra} />
            </Routes>
        </Router>
    );
}

export default App;
