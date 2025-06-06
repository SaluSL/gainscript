import { useAuth } from "@/lib/auth";
import { JSX, useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      auth.login();
    }
  });

  if (!auth.isAuthenticated()) {
    return <div>Redirecting to login...</div>;
  }

  return children;
}
