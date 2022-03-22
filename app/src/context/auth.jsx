import { createContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken) {
      api.defaults.headers.Authorization = storagedToken;
      setIsAuthenticated(true);
    }
  }, []);

  async function Login(email, senha) {
    const response = await api.post("/login", {
      email: email,
      senha: senha,
    });

    if (response.status === 200) {
      localStorage.setItem("@App:token", `Bearer ${response.data}`);
      setIsAuthenticated(true);
      api.defaults.headers.Authorization = `Bearer ${response.data}`;
    }
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(isAuthenticated), Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
