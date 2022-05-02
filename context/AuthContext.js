import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LOGIN_API_URL } from "@/config/index";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const register = async (user) => {
    console.log(
      `The register button has been successfully pressed. It does nothing of course`
    );
  };
  const login = async ({ email, password }) => {
    const res = await axios.post(`${LOGIN_API_URL}`, {
      email,
      password,
    });
    if (res.data) {
      setUser(res.data.email);
      router.push("/");
    } else {
      setError(res.data.message);
      setError(null);
    }
  };
  const logout = async () => {
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
