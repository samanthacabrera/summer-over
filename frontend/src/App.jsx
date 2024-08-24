import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/" className="hover:underline">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
