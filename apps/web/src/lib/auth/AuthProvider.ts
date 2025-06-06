import { AuthUser } from "./AuthUser";

export interface AuthProvider {
  isAuthenticated: () => boolean;
  user: AuthUser | null;
  getAccessToken: () => Promise<string | undefined>;
  login: () => void;
  register: () => void;
  logout: () => void;
}
