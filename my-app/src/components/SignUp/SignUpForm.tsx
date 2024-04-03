"use client";

import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const router = useRouter();

  const createUser = useMutation(api.createUser.createUser);

  const [formData, setFormData] = React.useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("created user!");
      createUser({ email: formData.email, password: formData.password });
    }
  }

  const createAccount = () => {
    router.push("/login");
  };

  return (
    <div className="mt-16 desktop:text-secondaryText">
      <p className="text-2xl font-bold">Create account</p>
      <p className="text-secondaryText">
        Let's get you started sharing your links!
      </p>
      <form className="mt-10" onSubmit={handleSubmit}>
        {/* Create email address */}
        <label className="text-text">Email address</label>
        <Image
          src="/mail-logo.png"
          alt="Picutre of mail"
          width={13}
          height={20}
          layout="fixed"
          className="absolute h-4 w-5 "
        />

        <input
          name="email"
          type="email"
          placeholder="e.g. alex@email.com"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-secondaryText h-12 p-2 pl-8 w-full"
        />

        {/* Create password */}
        <div className="mt-6">
          <label className="text-text">Create Password</label>
        </div>
        <input
          name="password"
          type="password"
          placeholder="At least 8 characters"
          className="border border-secondaryText h-12 p-2 pl-8 w-full"
          value={formData.password}
          onChange={handleInputChange}
        />

        {/* Confirm password */}
        <div className="mt-6">
          <label className="text-text">Confirm Password</label>
        </div>
        <input
          name="confirmPassword"
          type="password"
          placeholder="At least 8 characters"
          className="border border-secondaryText h-12 p-2 pl-8 w-full"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <div className="mt-6">
          <PrimaryButton
            onClick={() => console.log("login")}
            children="Create new account"
            className="text-white bg-primary h-12 rounded-md w-full"
          />
        </div>
      </form>
      <div className="flex flex-col mt-6 items-center">
        <p>Already have an account?</p>
        <button className="text-primary" onClick={createAccount}>
          Login
        </button>
      </div>
    </div>
  );
}
