import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
                <Route path="/" element={<Navigate to="/onboarding" replace />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/pizarra" element={<Pizarra />} />
            </Routes>
        </Router>
    );
}

export default App;
