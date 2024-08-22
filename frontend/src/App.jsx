import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Group from './pages/Group/Group';

const App = () => {
  return (
    <Router>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline">Profile</Link>
            </li>
            <li>
              <Link to="/group" className="hover:underline">Group</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/group" element={<Group />} />
        </Routes>
    </Router>
  );
};

export default App;
