"use client";

import { AuthCardHeader } from "@/components/shared/AuthCardHeader";
import { arbitrumSepolia } from "@account-kit/infra";
import { AlchemyAccountProvider, createConfig } from "@account-kit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { ConfigContextProvider, DEFAULT_CONFIG } from "./state";

const queryClient = new QueryClient();

const alchemyConfig = createConfig(
  {
    rpcUrl: "/api/rpc",
    chain: arbitrumSepolia,
    ssr: true,
    policyId: process.env.NEXT_PUBLIC_PAYMASTER_POLICY_ID
  },
  {
    illustrationStyle: DEFAULT_CONFIG.ui.illustrationStyle,
    auth: {
      sections: [[{ type: "email" as const }], [{ type: "passkey" as const }]],
      addPasskeyOnSignup: DEFAULT_CONFIG.auth.addPasskey,
      header: (
        <AuthCardHeader
          theme={DEFAULT_CONFIG.ui.theme}
          logoDark={DEFAULT_CONFIG.ui.logoDark}
          logoLight={DEFAULT_CONFIG.ui.logoLight}
        />
      ),
    },
  }
);

export const Providers = (props: PropsWithChildren<{}>) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <AlchemyAccountProvider
          config={alchemyConfig}
          queryClient={queryClient}
        >
          <ConfigContextProvider>{props.children}</ConfigContextProvider>
        </AlchemyAccountProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
