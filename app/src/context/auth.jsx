import { createContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken) {
      api.defaults.headers.Authorization = storagedToken;
    }
  }, []);

  async function Login(email, senha) {
    const response = await api.post("/login", {
      email: email,
      senha: senha,
    });

    if (response.status === 200) {
      localStorage.setItem("@App:token", `Bearer ${response.data}`);
    }

    console.log(response);

    setUser(response.data);
    api.defaults.headers.Authorization = `Bearer ${response.data}`;
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
