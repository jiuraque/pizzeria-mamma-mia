import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");

  const login = async (credentials) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
    }
    return data;
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        return true;
      }

      return false;
    } catch (err) {
      console.error("Error al registrar:", err);
      return false;
    }
  };

  const logout = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setEmail(data.email);
    return data;
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};


