"use client";

import React, { useEffect } from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import LinkButton from "@/components/Button/LinkButton";

export default function Preview() {
  // Get existing user through clerk
  const { user } = useUser();

  // Query for profile data (if it exists)
  const profileData = useQuery(api.getProfiles.getProfiles, {
    userId: user?.id || "",
  });

  // Query for ink data
  const linksData = useQuery(api.getLinks.getLinks, { userId: user?.id || "" });

  useEffect(() => {
    console.log(profileData);
    console.log(linksData);
    // console.log(user);
  }, [profileData, linksData, user]);

  return (
    <main>
      {profileData && linksData ? (
        <div className="flex flex-col items-center">
          {/* Profile image */}
          <img
            src={profileData ? (profileData[0]?.imageUrl as string) : ""}
            alt={profileData ? "Profile Photo" : ""}
            className="h-48 w-48 rounded-full"
          />

          {/* Profile Name */}
          <div className="my-3">
            <p className="text-4xl font-semibold">
              {profileData[0].firstName}&nbsp;{profileData[0].lastName}
            </p>
          </div>

          {/* Profile email */}
          <div className="mb-8">
            <p>{profileData[0].email}</p>
          </div>

          {/* List of links */}
          {linksData.map((link) => (
            <LinkButton platform={link.platform} color={link.color} /> // Assuming you have or add a 'key' prop
          ))}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </main>
  );
}
