import React, { useState } from 'react'; 
import './page4.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Page4({ setPage }) {
  const [budget, setBudget] = useState(''); // State for budget
  const [houseSize, setHouseSize] = useState(''); // State for house size
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = () => {
    navigate('/page2'); // Navigate to Page 2
  };

  const handleNextClick = () => {
    // Reset error message
    setError('');

    // Validate house size to be greater than or equal to 3
    if (Number(houseSize) < 3) {
      setError('House size must be greater than or equal to 3 Marla.');
    } else {
      // Proceed to the next page if validation passes
      setPage(6);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Solar Panels</b></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'white' }}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* Back Arrow Icon */}
          <div onClick={handleBackClick} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
            </svg>
          </div>
        </div>
      </nav>

      <div className="page page-4">
        <h2>Enter Your Budget and House Size</h2>
        <input 
          type="number" 
          placeholder="Enter Budget" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Enter House Size in Marla" 
          value={houseSize} 
          onChange={(e) => setHouseSize(e.target.value)} 
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <button id="nextButtonPage4" onClick={handleNextClick}>Next</button>
      </div>
      {/* Footer */}
      <footer className="footer">
        <h4>Contact Information</h4>
        <div className="footer-columns">
          <div className="footer-content">
            <h5>Kashan Saeed</h5>
            <p>Email: kashanmiankhel@gmail.com</p>
            <p>Phone: +92 333 1530855</p>
          </div>
          <div className="footer-content">
            <h5>Khadeen Faiz</h5>
            <p>Email: khadeenfaiz@gmail.com</p>
            <p>Phone: +92 318 9177303</p>
          </div>
          <div className="footer-content">
            <h5>Ikrama Shah</h5>
            <p>Email: ikramashah@gmail.com</p>
            <p>Phone: +92 315 5529798</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Solar Panels. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Page4;
