import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
import { useSolarContext } from './SolarContext'; // Solar Context
import { useUser } from './UserContext'; // User Context
import './page7.css';
import solarPanelImage from './Screenshot 2024-11-24 145904.png';
import leadAcidBatteryImage from './Screenshot 2024-11-24 142702.png';
import lithiumBatteryImage from './Screenshot 2024-11-24 144415.png';
import kwInverterImage from './Screenshot 2024-11-24 164817.png';
import kw2InverterImage from './Screenshot 2024-11-24 164851.png';
import kw3InverterImage from './Screenshot 2024-11-24 164910.png';
import kw4InverterImage from './Screenshot 2024-11-24 164926.png';
import kw5InverterImage from './Screenshot 2024-11-24 164955.png';
import kw6InverterImage from './Screenshot 2024-11-24 165037.png';
import kw7InverterImage from './Screenshot 2024-11-24 165520.png';
import kw8InverterImage from './Screenshot 2024-11-24 172801.png';
import kw9InverterImage from './Screenshot 2024-11-24 172950.png';
import kw10InverterImage from './Screenshot 2024-11-24 165752.png';

const Page7 = () => {
  const { solarData } = useSolarContext(); // Get solar data
  const { userData } = useUser(); // Get user data
  const navigate = useNavigate();

  if (!solarData?.results) {
    navigate('/page5'); // Redirect if no solar data
    return null;
  }

  const { results, batteryType } = solarData;
  // Function to get the correct inverter image based on size
  const getInverterImage = (size) => {
    switch (size) {
      case 1:
        return kwInverterImage;
      case 2:
        return kw2InverterImage;
      case 3:
        return kw3InverterImage;
      case 4:
        return kw4InverterImage;
      case 5:
        return kw5InverterImage;
      case 6:
        return kw6InverterImage;
      case 7:
        return kw7InverterImage;
      case 8:
        return kw8InverterImage;
      case 9:
        return kw9InverterImage;
      case 10:
        return kw10InverterImage;
      default:
        return kwInverterImage;
    }
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
              onClick={() => navigate('/page6')} // Navigate to Page6.js
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

      <div className="page7-container">
        <h3>Message</h3>
      <h3>Your order has been processed.</h3>
      <h3>we will further contact you for more details!</h3>
      <h3> </h3>
        <h2>System Overview</h2>

        <div className="image-section">
          <h3>Solar Panel</h3>
          <img src={solarPanelImage} alt="Solar Panel" className="image" />
          <p>This is the solar panel that will be installed in your system.</p>
        </div>

        <div className="image-section">
          <h3>Battery Type</h3>
          {batteryType === 'leadAcid' ? (
            <>
              <img src={leadAcidBatteryImage} alt="Lead Acid Battery" className="image" />
              <p>Lead Acid Battery: Reliable and cost-effective for long-term use.</p>
            </>
          ) : (
            <>
              <img src={lithiumBatteryImage} alt="Lithium Battery" className="image" />
              <p>Lithium Battery: High efficiency and longer lifespan.</p>
            </>
          )}
        </div>

        <div className="image-section">
          <h3>Inverter</h3>
          <img
            src={getInverterImage(results.inverterSize)}
            alt={`Inverter ${results.inverterSize} kW`}
            className="image"
          />
          <p>Inverter: {results.inverterSize} kW inverter for your system.</p>
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
export default Page7;
