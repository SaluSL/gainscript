import RootRouterOutlet from "./router";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TRPCProvider, useTRPC } from "@/lib/trpc";
import {
  createTRPCClient,
  httpBatchLink,
  createTRPCClientProxy,
} from "@trpc/client";
import { useState, ReactNode } from "react";
import { type AppRouter } from "api";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { AuthContextProvider } from "@/lib/auth";
import { useKindeAdapter } from "@/lib/auth/KindeAuthProvider";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}
let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

function AuthWrapper({ children }: { children: ReactNode }) {
  const kindeAuth = useKindeAdapter();

  return (
    <AuthContextProvider provider={kindeAuth}>{children}</AuthContextProvider>
  );
}

function App() {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: "http://localhost:5001/trpc",
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <KindeProvider
          clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
          domain={import.meta.env.VITE_KINDE_DOMAIN}
          logoutUri={window.location.origin}
          redirectUri={window.location.origin}
        >
          <AuthWrapper>
            <RootRouterOutlet />
          </AuthWrapper>
        </KindeProvider>
      </TRPCProvider>
    </QueryClientProvider>
  );
}

export default App;
