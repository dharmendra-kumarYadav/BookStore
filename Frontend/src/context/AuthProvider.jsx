import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const initialAuthUser = localStorage.getItem("Users");
      return initialAuthUser && initialAuthUser !== "undefined"
        ? JSON.parse(initialAuthUser)
        : undefined;
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return undefined;
    }
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
