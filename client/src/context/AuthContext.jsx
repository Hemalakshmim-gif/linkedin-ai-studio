import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // ===============================
  // Login
  // ===============================
  const login = (userData, token) => {

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);

    setUser(userData);

  };

  // ===============================
  // Update Logged-in User
  // ===============================
  const updateUser = (userData) => {

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

  };

  // ===============================
  // Logout
  // ===============================
  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        updateUser,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthContext;