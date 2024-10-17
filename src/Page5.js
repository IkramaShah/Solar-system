import React, { useState } from 'react';
import './page5.css';
import { Link, useNavigate } from 'react-router-dom';

const Page5 = () => {
  const [powerConsumption, setPowerConsumption] = useState(0); // in Watts
  const [backupTime, setBackupTime] = useState(0); // in hours
  const [batteryType, setBatteryType] = useState('leadAcid'); // 'leadAcid' or 'lithium'
  const [sunlightFactor, setSunlightFactor] = useState(1.5); // Default to Low Sunlight Area
  const [results, setResults] = useState(null);

  const calculate = () => {
      // Step 1: Load Calculation
      const loadCalculation = powerConsumption; // Already given in Watts
      
      // Step 2: Backup Time
      const batteryStorage = loadCalculation * backupTime;

      // Step 3: Battery Capacity
      let requiredBatteries;
      if (batteryType === 'leadAcid') {
          const leadAcidStorage = 1300; // Watt stored by one 150Ah lead acid battery
          requiredBatteries = Math.ceil(batteryStorage / leadAcidStorage);
      } else { // Lithium battery
          requiredBatteries = 1; // Only one lithium battery needed
      }

      // Step 4: Inverter Capacity
      const inverterCapacity = loadCalculation + loadCalculation * 0.20; // adding 20%
      
      // Step 5: Solar Panel Capacity, factoring in sunlight
      const solarPanelCapacity = requiredBatteries * 600 / sunlightFactor; // assuming each battery has 600Ah

      // Set results
      setResults({
          loadCalculation,
          batteryStorage,
          requiredBatteries,
          inverterCapacity,
          solarPanelCapacity,
      });
  };

  return (
      <div className="page5-container">
          <h2>Battery and Solar Panel Calculator</h2>
          <div className="input-group">
              <label>Power Consumption (in Watts):</label>
              <input
                  type="number"
                  value={powerConsumption}
                  onChange={(e) => setPowerConsumption(Number(e.target.value))}
              />
          </div>
          <div className="input-group">
              <label>Backup Time (in hours):</label>
              <input
                  type="number"
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
          <div className="button-group">
              <button onClick={calculate}>Calculate</button>
          </div>
          {results && (
              <div className="result">
                  <h3>Calculation Results:</h3>
                  <p>Load Calculation: {results.loadCalculation} Watts</p>
                  <p>Battery Storage Required: {results.batteryStorage} Watts</p>
                  <p>Required Batteries: {results.requiredBatteries}</p>
                  <p>Inverter Capacity: {results.inverterCapacity} Watts</p>
                  <p>Solar Panel Capacity: {results.solarPanelCapacity} Watts</p>
              </div>
          )}
      </div>
  );
};

export default Page5;
