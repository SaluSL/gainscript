import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { AuthProvider } from "./AuthProvider";

export const useKindeAdapter = (): AuthProvider => {
  const { isAuthenticated, user, login, register, logout, getAccessToken } =
    useKindeAuth();

  return {
    isAuthenticated: () => isAuthenticated,
    user: user
      ? {
          id: user.id,
          email: user.email || undefined,
          name: `${user.givenName} ${user.familyName}` || undefined,
          pictureUrl: user.picture || undefined,
        }
      : null,
    getAccessToken,
    login,
    register,
    logout,
  };
};
