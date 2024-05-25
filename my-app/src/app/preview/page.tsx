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

  return (
    <main className="flex items-center justify-center">
      <div className="bg-white w-fit p-8 rounded-3xl">
        {profileData && linksData ? (
          <div className="flex flex-col items-center tablet:border-2">
            {/* Profile image */}
            <img
              src={profileData ? (profileData[0]?.imageUrl as string) : ""}
              alt={profileData ? "Profile Photo" : ""}
              className="h-48 w-48 rounded-full"
            />
            {/* Profile Name */}
            <div className="my-3">
              <p className="text-4xl font-semibold">
                {profileData[0]?.firstName}&nbsp;{profileData[0]?.lastName}
              </p>
            </div>
            {/* Profile email */}
            <div className="mb-8">
              <p>{profileData[0]?.email}</p>
            </div>
            {/* List of links */}
            {linksData.map((link, index) => (
              <LinkButton
                key={index}
                platform={link.platform}
                color={link.color}
                link={link.link}
              />
            ))}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </main>
  );
}
