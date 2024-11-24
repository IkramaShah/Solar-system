import React, { createContext, useState, useContext } from 'react';

// Create a Context
const SolarContext = createContext();

// Export the provider component
export const SolarProvider = ({ children }) => {
  const [solarData, setSolarData] = useState({
    userData: null,
    results: null,
    batteryType: 'leadAcid',
  });

  return (
    <SolarContext.Provider value={{ solarData, setSolarData }}>
      {children}
    </SolarContext.Provider>
  );
};

// Custom hook to use the context
export const useSolarContext = () => {
  const context = useContext(SolarContext);
  if (!context) {
    throw new Error('useSolarContext must be used within a SolarProvider');
  }
  return context;
};