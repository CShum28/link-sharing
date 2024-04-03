// "use client";

// import { ReactNode } from "react";
// import { ConvexProvider, ConvexReactClient } from "convex/react";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export default function ConvexClientProvider({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return <ConvexProvider client={convex}>{children}</ConvexProvider>;
// }

"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { PropsWithChildren } from "react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export function ConvexClientProvider({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
