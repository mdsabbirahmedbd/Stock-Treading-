import {  useState } from "react";
import { AuthContext } from "./AuthContext";
import useAxiosSecure from "../Hooks/useaxiosSecure";



 const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure()
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  // ── Register ──────────────────────────────────────────
  const register = async (name, email, password) => {
    const res = await axiosSecure.post("/register", {
      name, email, password,
    });
    saveAuth(res.data);
    return res.data;
  };

  // ── Login ─────────────────────────────────────────────
  const login = async (email, password) => {
    const res = await axiosSecure.post("/login", {
      email, password,
    });
    saveAuth(res.data);
    return res.data;
  };

  // ── Logout ────────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };


  const saveAuth = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default  AuthProvider


