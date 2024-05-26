// "use client";

import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {userId ? (
          <SignOutButton>
            <button className="text-white bg-primary h-12 rounded-md w-full">
              Sign Out
            </button>
          </SignOutButton>
        ) : (
          <SignInButton afterSignInUrl="/customize-link">
            <button className="text-white bg-primary h-12 rounded-md w-full">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </main>
  );
}
