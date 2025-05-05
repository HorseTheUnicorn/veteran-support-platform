import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Navbar from './components/Navbar';  // Make sure Navbar is default exported as well

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
