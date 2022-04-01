import { createContext, useState, useEffect } from "react";
import { useSimplifoodApi } from "../services/use-simplifood-api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = useSimplifoodApi();

  useEffect(() => {
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  async function Login(email, senha) {
    const response = await api.login(email, senha);

    if (response.status === 200) {
      localStorage.setItem("@App:token", `Bearer ${response.data}`);
      setIsAuthenticated(true);
    }
  }

  function Logout() {
    setIsAuthenticated(false);
    localStorage.clear();
  }
  return (
    <AuthContext.Provider
      value={{ signed: Boolean(isAuthenticated), Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
