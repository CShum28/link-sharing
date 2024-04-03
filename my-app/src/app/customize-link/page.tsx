"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import AddLink from "@/components/AddLink/AddLink";
import Image from "next/image";

interface LinkInfo {
  number: number;
  platform: string;
  link: string;
  placeholder: string;
}
export default function CustomizeLink() {
  const [links, setLinks] = useState<LinkInfo[]>([]);

  const addLink = () => {
    console.log("add");
    // Create a new link object
    const newLink: LinkInfo = {
      number: links.length + 1, // Assuming you want the number to be unique and sequential
      platform: "", // Placeholder value, replace with actual data as needed
      link: "", // Placeholder value, replace with actual data as needed
      placeholder: "",
    };

    // Update the state with the new link object
    setLinks((currentLinks) => [...currentLinks, newLink]);
  };

  const updateLink = (updatedLink: LinkInfo) => {
    setLinks((currentLinks) =>
      currentLinks.map((link) =>
        // check for the right link to update, if its the right one update it, if not leave it as is
        link.number === updatedLink.number ? updatedLink : link
      )
    );
  };

  // Updates the link number listings on the link
  const updateLinkNumbers = () => {
    setLinks((currentLinks) =>
      currentLinks.map((linkInfo, index) => {
        return {
          ...linkInfo,
          number: index + 1,
        };
      })
    );
  };

  const deleteLink = (removeNum: number) => {
    setLinks((currentLinks) => {
      const newLinks = currentLinks.filter((link) => link.number !== removeNum);
      console.log(newLinks);
      return newLinks.map((link, index) => ({ ...link, number: index + 1 }));
    });
  };

  useEffect(() => {
    console.log("Links updated:", links); // This will log the updated state after changes
    // updateLinkNumbers();
  }, [links]);

  const submitLinks = () => {
    console.log(links);
  };

  return (
    <main className="min-h-screen mobile:p-8 tablet:p-24 desktop:p-36">
      <div className="">
        <Logo />
      </div>
      <p className="text-2xl font-bold">Customize your links</p>
      <p className="text-secondaryText">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="my-8">
        <SecondaryButton children={"+ Add new link"} onClick={addLink} />
      </div>
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
            than one link, you can reorder and edit them. We're here to help you
            share your profiles with everyone!
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
      <PrimaryButton
        children="Save"
        disabled={links.length === 0}
        onClick={submitLinks}
      />
    </main>
  );
}
