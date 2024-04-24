// "use client";

import Logo from "../components/Logo";
import PrimaryButton from "@/components/Button/PrimaryButton";
// import { useRouter } from "next/navigation";

import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/login");
  // };

  return (
    <main className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {userId ? (
          <SignOutButton className="text-white bg-primary h-12 rounded-md w-full" />
        ) : (
          <SignInButton
            afterSignInUrl="/customize-link"
            className="text-white bg-primary h-12 rounded-md w-full"
          />
        )}
      </div>
    </main>
  );
}
