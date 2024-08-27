import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import ClientDashboard from './components/ClientDashboard';
import AdminDashboard from './components/AdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import ProjectMonitoring from './components/ProjectMonitoring';
import ContactAdmin from './components/ContactAdmin';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/client-dashboard" element={<ClientDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/manager-dashboard" element={<ManagerDashboard />} />
                <Route path="/project-monitoring" element={<ProjectMonitoring />} />
                <Route path="/contact-admin" element={<ContactAdmin />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
}

export default App;
