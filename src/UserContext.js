import React, { createContext, useState, useContext } from 'react';

// Create User Context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Provider to wrap your application
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: '', mobile: '' });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
