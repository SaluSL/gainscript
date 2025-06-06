import React, { createContext, useContext } from "react";
import { AuthProvider } from "./AuthProvider";

const AuthContext = createContext<AuthProvider | null>(null);

export const AuthContextProvider = ({
  children,
  provider,
}: {
  children: React.ReactNode;
  provider: AuthProvider;
}) => {
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used inside AuthContextProvider");
  return context;
};
