import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUser } from './UserContext'; // Import useUser from UserContext
import { UserProvider } from './UserContext'; // Import UserProvider
import { SolarProvider } from './SolarContext'; // Import SolarProvider
import './App.css';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import About from './About';
import Marla3 from './Marla3';
import Marla7 from './Marla7';
import Marla10 from './Marla10';
import Kanal from './Kanal';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const { userData, setUserData } = useUser(); // Access userData and setUserData from context
  const [error, setError] = React.useState(''); // State to store error messages
  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError(''); // Clear errors when user types
  };

  const handleNextPage = () => {
    // Input validation
    if (!userData.name || !userData.mobile) {
      setError('Please fill out all fields.');
      return;
    }

    if (userData.mobile.length !== 11) {
      setError('Mobile number must be exactly 11 digits.');
      return;
    }

    if (!userData.mobile.startsWith('03')) {
      setError('Mobile number must start with 03.');
      return;
    }

    const repeatedPattern = /(\d)\1{3,}/; // Regex for repeating digits
    if (repeatedPattern.test(userData.mobile)) {
      setError('Mobile number cannot have a digit repeated more than 3 times consecutively.');
      return;
    }

    if (userData.name.length > 40) {
      setError('Name must be 40 characters or less.');
      return;
    }

    navigate('/page2'); // Navigate to Page2 if everything is valid
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
              className="name-input"
              placeholder="Enter Your Name"
              value={userData.name}
              onChange={handleInputChange}
            />

            <input
              type="tel"
              name="mobile"
              className="mobile-input"
              placeholder="Enter Your Mobile Number"
              value={userData.mobile}
              onChange={handleInputChange}
            />

            <button id="nextButtonPage1" onClick={handleNextPage}>
              Log In
            </button>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </div>
  );
}

function AppWithRouter() {
  return (
    <UserProvider>
      <SolarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/marla3" element={<Marla3 />} />
            <Route path="/marla7" element={<Marla7 />} />
            <Route path="/marla10" element={<Marla10 />} />
            <Route path="/Kanal" element={<Kanal />} />
            <Route path="/about" element={<About />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
          </Routes>
        </Router>
      </SolarProvider>
    </UserProvider>
  );
}

export default AppWithRouter;
