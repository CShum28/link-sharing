"use client";

import React, { useEffect } from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import LinkButton from "@/components/Button/LinkButton";

export default function ProfilePreview() {
  // Get existing user through clerk
  const { user } = useUser();

  // Query for profile data (if it exists)
  const profileData = useQuery(api.getProfiles.getProfiles, {
    userId: user?.id || "",
  });

  // Query for ink data
  const linksData = useQuery(api.getLinks.getLinks, { userId: user?.id || "" });

  return (
    <main>
      <div className="border-2 p-10 rounded-3xl">
        {profileData && linksData ? (
          <div className="flex flex-col items-center tablet:border-2">
            {/* Profile image */}
            <img
              src={
                profileData.length > 0
                  ? (profileData[0]?.imageUrl as string)
                  : "/blank-circle.png"
              }
              alt={profileData ? "profile photo" : ""}
              className="h-48 w-48 rounded-full"
            />
            {/* Profile Name */}
            <div className="my-3">
              {profileData.length > 0 ? (
                <>
                  <p className="text-2xl font-bold">
                    {profileData[0]?.firstName} {profileData[0]?.lastName}
                  </p>
                </>
              ) : (
                <img
                  src="/blank-name.png"
                  alt="blank name"
                  className="w-48 h-6"
                />
              )}
            </div>
            {/* Profile email */}
            <div className="mb-8">
              {profileData.length > 0 ? (
                <p>{profileData[0]?.email}</p>
              ) : (
                <img
                  src="/blank-email.png"
                  alt="blank email"
                  className="w-32 h-4"
                />
              )}
            </div>
            {/* List of links */}
            {linksData.length > 0 ? (
              linksData.map((link, index) => (
                <LinkButton
                  key={index}
                  platform={link.platform}
                  color={link.color}
                  link={link.link}
                />
              ))
            ) : (
              <img src="/blank-links.png" alt="blank links" />
            )}
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
