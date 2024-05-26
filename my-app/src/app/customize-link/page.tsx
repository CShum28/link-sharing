"use client";

import React, { useState, useEffect } from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import AddLink from "@/components/AddLink/AddLink";
import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

interface LinkInfo {
  number: number;
  platform: string;
  link: string;
  placeholder: string;
  color: string;
}

export default function CustomizeLink() {
  const [links, setLinks] = useState<LinkInfo[]>([]);
  const [errorModal, setErrorModal] = useState(false); // Error Modal to display if user has not entered in link yet

  // Get existing user through clerk
  const { user } = useUser();

  // Convex updateLinks mutation
  const updateLinks = useMutation(api.updateLinks.updateLinks);

  // Query for updated link data
  const data = useQuery(api.getLinks.getLinks, { userId: user?.id || "" });

  useEffect(() => {
    // Assuming 'data' will be the array of links once the query completes
    if (data) {
      setLinks(data);
    }
  }, [data]); // Re-run the effect when 'data' changes

  // Add new link to existing links
  const addLink = () => {
    // Create a new link object
    const newLink: LinkInfo = {
      number: links.length + 1, // Assuming you want the number to be unique and sequential
      platform: "", // Placeholder value, replace with actual data as needed
      link: "", // Placeholder value, replace with actual data as needed
      placeholder: "",
      color: "",
    };

    // Update the state with the new link object
    setLinks((currentLinks) => [...currentLinks, newLink]);
  };

  // Update the current links on save
  const updateLink = (updatedLink: LinkInfo) => {
    setLinks((currentLinks) =>
      currentLinks.map((link) =>
        // check for the right link to update, if its the right one update it, if not leave it as is
        link.number === updatedLink.number ? updatedLink : link
      )
    );
  };

  const deleteLink = (removeNum: number) => {
    // Only modify the local state, do not interact with the database here
    setLinks((currentLinks) => {
      const newLinks = currentLinks.filter((link) => link.number !== removeNum);
      // Reassign link numbers
      return newLinks.map((link, index) => ({ ...link, number: index + 1 }));
    });
  };

  const submitLinks = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ensure the user is defined before proceeding.
    if (!user || typeof user.id !== "string") {
      console.error("No user id found");
      return; // Exit the function if there's no user id.
    }

    // Check to see if user selected a link platform
    const platformCheck = links.filter((link) => link.platform === "");

    // Check to see if any platforms do not have a link
    const linkCheck = links.filter((link) => link.link === "");

    if (linkCheck.length > 0 || platformCheck.length > 0) {
      setErrorModal(true);
    } else {
      setErrorModal(false);
      updateLinks({ links: links, userId: user.id });
    }
  };

  return (
    <main className="bg-white p-3 rounded-lg">
      <p className="text-2xl font-bold">Customize your links</p>
      <p className="text-secondaryText">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="my-8">
        <SecondaryButton onClick={addLink} widthFull>
          <p>+ Add new link</p>
        </SecondaryButton>
      </div>
      <form onSubmit={submitLinks}>
        {links.length === 0 && (
          <div className="my-8 bg-background border-2 flex flex-col items-center rounded-md text-center px-6 py-12 mx-auto">
            <Image
              src="/get-started.png"
              width={125}
              height={80}
              alt="Let's get started image"
            />
            <p className="text-2xl font-bold my-4">Let's get you started</p>
            <p className="text-secondaryText">
              Use the "Add new link" button to get started. Once you have more
              than one link, you can reorder and edit them. We're here to help
              you share your profiles with everyone!
            </p>
          </div>
        )}
        {links.map((link) => (
          <div key={link.number} className="flex flex-row">
            <AddLink
              linkInfo={link}
              updateLink={updateLink}
              deleteLink={deleteLink}
            />
          </div>
        ))}
        {errorModal && <ErrorMessage />}
        <PrimaryButton type="submit" disabled={links.length === 0} widthFull>
          <p>Save</p>
        </PrimaryButton>
      </form>
    </main>
  );
}
