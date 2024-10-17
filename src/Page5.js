import React, { useState } from 'react';
import './page5.css'; // Assuming you'll style it separately
import { Link, useNavigate } from 'react-router-dom';

function Page5() {
  const [electricityUsage, setElectricityUsage] = useState('');
  const [sunlightArea, setSunlightArea] = useState('1.5'); // Default to low sunlight
  const [leadBatterySize, setLeadBatterySize] = useState('');
  const [lithiumBatterySize, setLithiumBatterySize] = useState('');
  const [solarPanelCount, setSolarPanelCount] = useState('');

  const navigate = useNavigate();

  // Define the handleBackClick function to navigate to the previous page (e.g., Page4)
  const handleBackClick = () => {
    navigate('/page4'); // Adjust the path based on your routing setup
  };

  // Function to calculate solar panel needs
  const calculateSolarPanels = () => {
    if (electricityUsage) {
      const panelCount = (electricityUsage / sunlightArea / 300).toFixed(2); // Assuming 300W panels
      setSolarPanelCount(panelCount);
    }
  };

  // Function to calculate battery sizes
  const calculateBatterySize = () => {
    if (electricityUsage) {
      const leadSize = (electricityUsage * 2).toFixed(2); // Just an example formula
      const lithiumSize = (electricityUsage * 1.5).toFixed(2); // Example formula
      setLeadBatterySize(leadSize);
      setLithiumBatterySize(lithiumSize);
    }
  };

  const handleCalculate = () => {
    calculateSolarPanels();
    calculateBatterySize();
  };

  const handleReset = () => {
    setElectricityUsage('');
    setSunlightArea('1.5');
    setLeadBatterySize('');
    setLithiumBatterySize('');
    setSolarPanelCount('');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Solar Panels</b></a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ color: 'white' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'white' }}>About</Link>
              </li>
            </ul>
          </div>
          <div onClick={handleBackClick} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z" />
            </svg>
          </div>
        </div>
      </nav>

      <div className="page5-container">
        <h2>Solar Panel and Battery Calculator</h2>

        <div className="input-group">
          <label htmlFor="electricity-usage">Average Monthly Electricity Usage (kWh):</label>
          <input
            type="number"
            id="electricity-usage"
            value={electricityUsage}
            onChange={(e) => setElectricityUsage(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="location">Select Your Location:</label>
          <select
            id="location"
            value={sunlightArea}
            onChange={(e) => setSunlightArea(e.target.value)}
          >
            <option value="1.5">Low Sunlight Area</option>
            <option value="2.5">Moderate Sunlight Area</option>
            <option value="4">High Sunlight Area</option>
          </select>
        </div>

        <div className="button-group">
          <button onClick={handleCalculate}>Calculate</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        {solarPanelCount && (
          <div className="result">
            <h3>Results:</h3>
            <p>Solar Panels Needed: {solarPanelCount}</p>
            <p>Lead Battery Size: {leadBatterySize} kWh</p>
            <p>Lithium Battery Size: {lithiumBatterySize} kWh</p>
          </div>
        )}
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

export default Page5;
