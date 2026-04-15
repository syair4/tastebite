"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // BUG: logs password to console
    console.log("Login attempt:", email, "password:", password);

    // BUG: no real email validation — accepts anything
    if (email && password) {
      setUser({ email, name: email.split("@")[0] || "User" });
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string) => {
    console.log("Signup:", name, email, "password:", password);
    if (name && email && password) {
      setUser({ email, name });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, isLoggedIn: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
