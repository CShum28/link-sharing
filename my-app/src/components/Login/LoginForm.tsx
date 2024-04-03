"use client";

import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const createAccount = () => {
    router.push("/sign-up");
  };

  return (
    <div className="mt-16 desktop:text-secondaryText">
      <p className="text-2xl font-bold">Login</p>
      <p className="text-secondaryText">
        Add your details below to get back into the app
      </p>
      <form className="mt-10">
        {/* <div className="flex flex-col"> */}
        <label className="text-text">Email address</label>

        {/* <div className="flex"> */}
        <Image
          src="/mail-logo.png"
          alt="Picutre of mail"
          width={13}
          height={20}
          layout="fixed"
          className="absolute h-4 w-5 "
        />
        <input
          type="email"
          placeholder="e.g. alex@email.com"
          className="border border-secondaryText h-12 p-2 pl-8 w-full"
        />

        <div className="mt-6">
          <label className="text-text">Password</label>
        </div>
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-secondaryText h-12 p-2 pl-8 w-full"
        />

        <div className="mt-6">
          <PrimaryButton
            onClick={() => console.log("login")}
            children="Login"
            className="text-white bg-primary h-12 rounded-md w-full"
          />
        </div>
      </form>
      <div className="flex flex-col mt-6 items-center">
        <p>Don't have an account?</p>
        <button className="text-primary" onClick={createAccount}>
          Create account
        </button>
      </div>
    </div>
  );
}
