import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  //Global state som vi kan "skicka" med Context
  const [user, setUser] = useState(null);

  const signIn = (mockUser) => {
    setUser(mockUser); // Simulate a user signing in with mock data
  };

  const signOut = () => {
    setUser(null); // Simulate a user signing out
  };

  //useEffect, Här kommer vi kolla om användaren är inloggad eller inte
  useEffect(() => {
    const mockUser = { name: "John Doe", email: "john@example.com" };
    signIn(mockUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

