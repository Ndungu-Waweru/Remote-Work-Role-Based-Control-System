import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (email, password) => {
    setLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setUser({
        email,
        roles: ["ADMIN"], // Example roles
        permissions: ["MANAGE_USERS", "VIEW_REPORTS"],
      });
      setLoading(false);
    }, 500);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
