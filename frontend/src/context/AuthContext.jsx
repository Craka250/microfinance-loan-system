import { createContext, useEffect, useState, useCallback } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = () => {
      try {
        const storedUser = localStorage.getItem("mf_user");
        const storedToken = localStorage.getItem("mf_token");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (err) {
        console.error("Auth init error:", err);
        localStorage.removeItem("mf_user");
        localStorage.removeItem("mf_token");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback((userData, tokenData) => {
    localStorage.setItem("mf_user", JSON.stringify(userData));
    localStorage.setItem("mf_token", tokenData);

    setUser(userData);
    setToken(tokenData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("mf_user");
    localStorage.removeItem("mf_token");

    setUser(null);
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
