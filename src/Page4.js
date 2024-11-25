import React, { useState } from 'react';
import './page4.css';
import { Link, useNavigate } from 'react-router-dom';

function Page4() {
  const [appliances, setAppliances] = useState([{ name: '', watts: '', quantity: '' }]);
  const [totalLoad, setTotalLoad] = useState(0);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/page2');
  };

  const handleLogout = () => {
    // Perform any logout-related logic
    console.log('User logged out');
    navigate('/'); // Redirect to the home page
  };

  const addAppliance = () => {
    setAppliances([...appliances, { name: '', watts: '', quantity: '' }]);
  };

  const handleChange = (index, e) => {
    const updatedAppliances = [...appliances];
    updatedAppliances[index][e.target.name] = e.target.value;
    setAppliances(updatedAppliances);
  };

  const calculateTotalLoad = () => {
    // Validate the appliance data
    for (let appliance of appliances) {
      const watts = parseInt(appliance.watts) || 0;
      const quantity = parseInt(appliance.quantity) || 0;

      if (watts <= 0 || quantity <= 0) {
        alert('Watts and quantity must be greater than 0 for all appliances.');
        return; // Stop further execution if invalid data is found
      }
    }

    const total = appliances.reduce((acc, appliance) => {
      const watts = parseInt(appliance.watts) || 0;
      const quantity = parseInt(appliance.quantity) || 0;
      return acc + watts * quantity;
    }, 0);

    setTotalLoad(total);
  };

  const isFormValid = () => {
    for (let appliance of appliances) {
      const watts = parseInt(appliance.watts) || 0;
      const quantity = parseInt(appliance.quantity) || 0;

      if (!appliance.name || watts <= 0 || quantity <= 0) {
        return false;
      }
    }
    return true;
  };

  const handleNextClick = () => {
    if (isFormValid()) {
      navigate('/page5');
    } else {
      alert('Please fill out all appliance details with valid values before proceeding.');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>Solar Panels</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Page2"
                  style={{ color: 'white' }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: 'white' }}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger logout-btn me-2"
                onClick={handleLogout}
              >
                Logout
              </button>
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
                    d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <h2>Appliance Load Calculator</h2>
        <table id="appliance-table">
          <thead>
            <tr>
              <th>Appliance</th>
              <th>Watts</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {appliances.map((appliance, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={appliance.name}
                    placeholder="Appliance Name"
                    onChange={(e) => handleChange(index, e)}
                    className="appliance-input" // Added class name
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="watts"
                    value={appliance.watts}
                    placeholder="Watts"
                    onChange={(e) => handleChange(index, e)}
                    className="appliance-input" // Added class name
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="quantity"
                    value={appliance.quantity}
                    placeholder="Quantity"
                    onChange={(e) => handleChange(index, e)}
                    className="appliance-input" // Added class name
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="input-group">
          <button onClick={addAppliance}>Add Appliance</button>
          <button onClick={calculateTotalLoad}>Calculate Total Load</button>
        </div>
        <div id="result">
          <h3>Total Load: {totalLoad} Watts</h3>
        </div>
      </div>

      {/* Next Button to navigate to Page5 */}
      <div className="next-button-container">
        <button onClick={handleNextClick} className="next-button">Next</button>
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
}

export default Page4;
