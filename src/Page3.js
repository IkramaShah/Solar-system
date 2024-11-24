import React from 'react';
import './page3.css';
import backgroundImage from './pexels-orlando-s-197680330-13205474.jpg'; // Correct path to your image
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Page3() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBackClick = () => {
    navigate('/page2'); // Navigate to Page2
  };

  const handleHomeClick = () => {
    navigate('/page2'); // Navigate to Page2 when Home button is clicked
  };

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to the main page (App.js) on logout
  };

  const handleMarla3Click = () => {
    navigate('/marla3'); // Navigate to the Marla3 page when button is clicked
  };

  const handleMarla7Click = () => {
    navigate('/marla7'); // Navigate to the Marla7 page when button is clicked
  };

  const handleMarla10Click = () => {
    navigate('/marla10'); // Navigate to the Marla10 page when button is clicked
  };

  const handleKanalClick = () => {
    navigate('/Kanal'); // Navigate to the Kanal page when button is clicked
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#343a40', color: 'white' }}>
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="#" style={{ color: 'white', fontWeight: 'bold' }}>
            Solar Panels
          </a>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active btn btn-link"
                  style={{ color: 'white', textDecoration: 'none' }}
                  onClick={handleHomeClick}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'white' }}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout Button and Arrow Icon */}
          <div className="d-flex align-items-center" style={{ marginLeft: 'auto' }}>
            {/* Logout Button */}
            <button
              className="btn btn-danger me-2"
              onClick={handleLogoutClick}
              style={{ padding: '5px 10px', fontWeight: 'bold' }}
            >
              Logout
            </button>

            {/* Arrow Icon */}
            <div onClick={handleBackClick} style={{ cursor: 'pointer' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="bi bi-arrow-90deg-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div className="background-image1" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Page Content */}
      <div className="page page-3">
        <div className="select-house-size">
          <h2>Select House Size</h2>
          {/* Navigate to Marla3 page when clicked */}
          <button id="size3ButtonPage3" onClick={handleMarla3Click}>
            3 Marla
          </button>
          <button id="size5ButtonPage3" onClick={handleMarla3Click}>
            5 Marla
          </button>
          <button id="size7ButtonPage3" onClick={handleMarla7Click}>
            7 Marla
          </button>
          {/* Update 10 Marla button to navigate to Marla10 */}
          <button id="size10ButtonPage3" onClick={handleMarla10Click}>
            10 Marla
          </button>
          <button id="size20ButtonPage3" onClick={handleKanalClick}>
            1 Kanal
          </button>
        </div>
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

export default Page3;
