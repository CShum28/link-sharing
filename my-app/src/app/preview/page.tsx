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
    console.log(user);
  }, [profileData, linksData, user]);

  return (
    <main>
      {profileData && linksData ? (
        <div className="flex flex-col items-center">
          {/* Profile image */}
          <img
            src={profileData ? profileData[0]?.imageUrl : ""}
            alt={profileData ? "Profile Photo" : ""}
            className="h-48 w-48 rounded-full"
          />
          {/* Profile email */}
          <p>{profileData ? profileData[0]?.email : ""}</p>

          {/* List of links */}
          {linksData.map((link) => (
            <LinkButton name={link.platform} /> // Assuming you have or add a 'key' prop
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
