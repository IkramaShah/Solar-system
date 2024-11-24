import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolarContext } from './SolarContext';
import { Link } from 'react-router-dom';
import './page5.css';

const Page5 = () => {
  const [powerConsumption, setPowerConsumption] = useState(0); // in Watts
  const [backupTime, setBackupTime] = useState(0); // in hours
  const [batteryType, setBatteryType] = useState('leadAcid'); // 'leadAcid' or 'lithium'
  const [sunlightFactor, setSunlightFactor] = useState(1.5); // Default to Low Sunlight Area
  const [results, setResults] = useState(null); // Local state for storing results

  const { solarData, setSolarData } = useSolarContext(); // Access global store
  const navigate = useNavigate();

  // Function to dynamically select the required inverter size
  const getInverterSize = (capacity) => Math.min(Math.ceil(capacity / 1000), 10); // Convert to kW and cap at 10 kW

  // Calculation logic
  const calculate = () => {
    if (powerConsumption <= 0 || backupTime <= 0) {
      alert('Please enter valid power consumption and backup time!');
      return;
    }

    // Step 1: Load Calculation
    const loadCalculation = powerConsumption;

    // Step 2: Backup Time
    const batteryStorage = loadCalculation * backupTime; // Total energy required in Watt-hours (Wh)

    // Step 3: Battery Capacity
    let requiredBatteries;
    if (batteryType === 'leadAcid') {
      const leadAcidStorage = 12 * 300 * 0.5; // 12V, 300Ah, 50% Depth of Discharge (DoD)
      requiredBatteries = Math.ceil(batteryStorage / leadAcidStorage);
    } else {
      const lithiumStorage = 5000 * 0.9; // 5000 Wh, 90% DoD
      requiredBatteries = Math.ceil(batteryStorage / lithiumStorage);
    }

    // Step 4: Inverter Capacity
    const inverterCapacity = loadCalculation * 1.2; // Adding 20% buffer
    const inverterSize = getInverterSize(inverterCapacity); // Inverter size in kW
    const requiredInverters = Math.ceil(inverterCapacity / (inverterSize * 1000)); // Number of inverters

    // Step 5: Solar Panel Capacity, factoring in sunlight
    const solarPanelCapacity = (inverterCapacity * backupTime) / sunlightFactor; // Adjusted with sunlight factor

    // Step 6: kW System Capacity (based on inverter capacity)
    const kwSystemCapacity = inverterCapacity / 1000; // Convert to kilowatts

    // Step 7: Number of Solar Panels
    const panelCapacity = 400; // Assuming each solar panel has 400 Watts capacity
    const requiredPanels = Math.ceil(solarPanelCapacity / panelCapacity);

    // Store the results locally and globally
    const calculatedResults = {
      loadCalculation,
      batteryStorage,
      requiredBatteries,
      inverterCapacity,
      solarPanelCapacity,
      kwSystemCapacity,
      requiredPanels,
      requiredInverters,
      inverterSize,
      batteryType,
    };

    setResults(calculatedResults);
    setSolarData({ ...solarData, results: calculatedResults, batteryType });
  };

  const handleNext = () => {
    if (!results) {
      alert('Please calculate the requirements before proceeding.');
      return;
    }

    navigate('/page6');
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
        onClick={() => navigate('/page4')} // Navigate to Page4.js
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

    <div className="page5-container">
      <h2>Battery and Solar Panel Calculator</h2>
      <div className="input-group">
        <label>Power Consumption (in Watts):</label>
        <input
          type="number"
          min="0"
          value={powerConsumption}
          onChange={(e) => setPowerConsumption(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Backup Time (in hours):</label>
        <input
          type="number"
          min="0"
          value={backupTime}
          onChange={(e) => setBackupTime(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Battery Type:</label>
        <select value={batteryType} onChange={(e) => setBatteryType(e.target.value)}>
          <option value="leadAcid">Lead Acid</option>
          <option value="lithium">Lithium</option>
        </select>
      </div>
      <div className="input-group">
        <label>Location:</label>
        <select value={sunlightFactor} onChange={(e) => setSunlightFactor(Number(e.target.value))}>
          <option value="1.5">Low Sunlight Area</option>
          <option value="2.5">Moderate Sunlight Area</option>
          <option value="4">High Sunlight Area</option>
        </select>
      </div>
      <button onClick={calculate}>Calculate</button>

      {results && (
        <div className="results">
          <h3>Calculation Results:</h3>
          <p><b>Load Calculation:</b> {results.loadCalculation} Watts</p>
          <p><b>Battery Storage Required:</b> {results.batteryStorage} Wh</p>
          <p><b>Required Batteries:</b> {results.requiredBatteries}</p>
          <p><b>Inverter Capacity:</b> {results.inverterCapacity} Watts</p>
          <p><b>Inverter Size:</b> {results.inverterSize} kW</p>
          <p><b>Number of Inverters:</b> {results.requiredInverters}</p>
          <p><b>Solar Panel Capacity:</b> {results.solarPanelCapacity} Watts</p>
          <p><b>Required kW System:</b> {results.kwSystemCapacity} kW</p>
          <p><b>Number of Solar Panels:</b> {results.requiredPanels}</p>
        </div>
      )}

      <button onClick={handleNext}>Next</button>
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

export default Page5;