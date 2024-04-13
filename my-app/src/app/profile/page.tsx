"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import UpdateProfile from "@/components/UpdateProfile/UpdateProfile";
import { useMutation } from "convex/react";

interface ProfileInfo {
  photo: File | null;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileInfo>({
    photo: null,
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      // If no files are selected, do nothing or handle as necessary
      return;
    }
    // We can now safely access the first file because we've made sure
    // that files is not null and not empty
    setProfile((prevProfile) => ({
      ...prevProfile,
      photo: files[0],
    }));
  };

  const submit = () => {
    console.log(profile);
  };

  return (
    <main className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36">
      <div>
        <Logo />
        <div className="pt-4 mt-4">
          <p className="text-2xl font-bold">Profile Details</p>
          <p className="text-secondaryText mt-2">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <UpdateProfile
          profile={profile}
          onTextChange={handleTextChange}
          onFileChange={handleFileChange}
          submit={submit}
        />
      </div>
    </main>
  );
}
