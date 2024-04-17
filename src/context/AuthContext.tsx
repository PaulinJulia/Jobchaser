import React, { createContext, useState, useEffect } from "react";
import { User, AuthContextType, AuthProviderProps } from "../types/types";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  //Global state som vi kan "skicka" med Context
  const [user, setUser] = useState<User | null>(null);

  const signIn = (mockUser: User) => {
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

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}> {children} </AuthContext.Provider>
  );
}
