"use client";

import React, { useState, useEffect } from "react";
import UpdateProfile from "@/components/UpdateProfile/UpdateProfile";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

interface ProfileInfo {
  photo: any;
  photoPreview: any;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileInfo>({
    photo: null,
    photoPreview: null,
    firstName: "",
    lastName: "",
    email: "",
  });
  // Get existing user through clerk
  const { user } = useUser();

  // Query for profile data (if it exists)
  const profileData = useQuery(api.getProfiles.getProfiles, {
    userId: user?.id || "",
  });

  useEffect(() => {
    if (profileData && profileData.length > 0) {
      const profileInfo = profileData[0];
      console.log(profileInfo);
      setProfile({
        photo: profileInfo.imageUrl,
        photoPreview: profileInfo.imageUrl,
        firstName: profileInfo.firstName,
        lastName: profileInfo.lastName,
        email: profileInfo.email,
      });
    }
  }, [profileData]);

  const updateProfile = useMutation(api.updateProfile.updateProfile);

  const generateUploadUrl = useMutation(api.updateProfile.generateUploadUrl);

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

    const file = files[0];
    const previewUrl = URL.createObjectURL(file);

    // We can now safely access the first file because we've made sure
    // that files is not null and not empty
    setProfile((prevProfile) => ({
      ...prevProfile,
      photo: file, // sets the actual photo file to be saved
      photoPreview: previewUrl, // a preview of the photo that is to be uploaded
    }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Ensure the user is defined before proceeding.
    if (!user || typeof user.id !== "string") {
      console.error("No user id found");
      return; // Exit the function if there's no user id.
    }

    // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "image/png" },
      body: profile.photo,
    });
    const { storageId } = await result.json();

    console.log(profile);
    updateProfile({
      userId: user.id,
      profile: {
        photo: storageId,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
      },
    });
  };

  return (
    <main>
      <div>
        <div>
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
