import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link along with useNavigate
import { useSolarContext } from './SolarContext'; // Solar Context
import { useUser } from './UserContext'; // User Context
import './page6.css';

const Page6 = () => {
  const { solarData } = useSolarContext(); // Get solar data
  const { userData } = useUser(); // Get user data
  const navigate = useNavigate();

  if (!solarData.results) {
    navigate('/page5'); // Redirect if no solar data
    return null;
  }

  const { results, batteryType } = solarData;

  // Prices for components
  const batteryPrice = batteryType === 'leadAcid' ? 85000 : 300000;
  const solarPanelPrice = 19360;

  // Define inverter prices based on size
  const inverterPrices = {
    1: 65000,
    2: 83000,
    3: 92000,
    4: 120000,
    5: 150000,
    6: 165000,
    7: 172000,
    8: 250000,
    9: 280000,
    10: 300000,
  };

  // Get the price for the specified inverter size
  const inverterSize = results.inverterSize; // Size in kW
  const inverterPrice = inverterPrices[inverterSize] || 0; // Fallback to 0 if size is not in the map

  // Total price calculation
  const totalPrice =
    results.requiredBatteries * batteryPrice +
    results.requiredPanels * solarPanelPrice +
    results.requiredInverters * inverterPrice;

  // Define handlePrint function
  const handlePrint = () => {
    window.print(); // Triggers the browser's print functionality
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>Solar Panels</b>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ color: 'white' }}>
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
          <div className="d-flex align-items-center">
            {/* Logout Button */}
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                // Handle logout logic here
                console.log('Logged out');
              }}
            >
              Logout
            </button>

            {/* Back Arrow Button */}
            <div
              onClick={() => navigate('/page5')} // Navigate to Page5.js
              style={{ cursor: 'pointer' }}
            >
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
                  d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="receipt-container">
        <h2>Receipt</h2>

        <p>
          <b>Name:</b> {userData.name}
        </p>
        <p>
          <b>Phone Number:</b> {userData.mobile}
        </p>

        <h3>System Requirements:</h3>
        <p>
          <b>Number of Batteries:</b> {results.requiredBatteries}
        </p>
        <p>
          <b>Battery Type:</b> {batteryType === 'leadAcid' ? 'Lead Acid' : 'Lithium'}
        </p>
        <p>
          <b>Number of Solar Panels:</b> {results.requiredPanels}
        </p>
        <p>
          <b>Number of Inverters:</b> {results.requiredInverters}
        </p>
        <p>
          <b>Inverter Size:</b> {inverterSize} kW
        </p>

        <h3>Total Price:</h3>
        <p>
          <b>Total Cost:</b> PKR {totalPrice.toLocaleString()}
        </p>

        <div className="button-container">
          <button className="print-button" onClick={handlePrint}>
            Print
          </button>
          <button className="add-to-cart-button" onClick={() => navigate('/page7')}>
            Add to Cart
          </button>
        </div>
      </div>
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
            <h5>Ikram Shah</h5>
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
};

export default Page6;
