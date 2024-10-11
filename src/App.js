// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './App.css'; // Page 1 CSS
import Page2 from './Page2'; // Import Page2
import Page3 from './Page3'; // Import Page3
import Page4 from './Page4'; // Import Page4
import About from './About'; // Import About Page
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [userData, setUserData] = useState({ name: '', mobile: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate inside the App function

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError(''); // Clear errors on input change
  };

  const handleNextPage = () => {
    // Input validation for mobile number and name
    if (userData.mobile.length !== 11) {
      setError('Mobile number must be exactly 11 digits.');
      return;
    }
    if (userData.name.length > 40) {
      setError('Name must be 40 characters or less.');
      return;
    }
    // Navigate to Page 2 after successful validation
    navigate('/page2');
  };

  return (
    <div className="App">
      <div className="page">
        <div className="left-section">
          <div className="form-container">
            <h1>Enter Your Details</h1>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={userData.mobile}
              onChange={handleInputChange}
            />
            <button id="nextButtonPage1" onClick={handleNextPage}>Log In</button>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </div>
  );
}

// Wrap App with Router and define Routes
function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} /> {/* Add Route to Page3 */}
        <Route path="/page4" element={<Page4 />} /> {/* Add Route to Page4 */}
        <Route path="/about" element={<About />} /> {/* Route to About Page */}
      </Routes>
    </Router>
  );
}

export default AppWithRouter;
