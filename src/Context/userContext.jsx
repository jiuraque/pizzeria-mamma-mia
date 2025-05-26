import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  
  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    if (savedToken) {
      setToken(true);
    }
  }, []);

 
  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", "abc123"); 
    } else {
      localStorage.removeItem("userToken");
    }
  }, [token]);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("userToken");
  };

  return (
    <UserContext.Provider value={{ token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};


