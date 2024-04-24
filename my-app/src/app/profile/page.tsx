"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import UpdateProfile from "@/components/UpdateProfile/UpdateProfile";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

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

  // Get existing user through clerk
  const { user } = useUser();

  const updateProfile = useMutation(api.updateProfile.updateProfile);

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

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Ensure the user is defined before proceeding.
    if (!user || typeof user.id !== "string") {
      console.error("No user id found");
      return; // Exit the function if there's no user id.
    }

    // // Step 1: Get a short-lived upload URL
    // const postUrl = await generateUploadUrl();
    // // Step 2: POST the file to the URL
    // const result = await fetch(postUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": selectedImage!.type },
    //   body: selectedImage,
    // });
    // const { storageId } = await result.json();

    updateProfile({ userId: user.id, profile: profile });
  };

  return (
    <main
    // className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36"
    >
      <div>
        {/* <Logo /> */}
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
