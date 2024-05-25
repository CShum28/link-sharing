"use client";

import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "../../../convex/_generated/api";

interface LinkCopyState {
  [key: string]: string;
}

const links = [
  {
    name: "Links",
    href: "/customize-link",
    icon: "/links.png",
    linkAlt: "Customized link icon",
  },
  {
    name: "Profile Details",
    href: "/profile",
    icon: "/profile.png",
    linkAlt: "Profile link icon",
  },
];

export default function Header() {
  const [linkCopy, setLinkCopy] = useState<LinkCopyState>({});

  // Get the pathname for clsx css
  const pathname = usePathname();
  // Router to go back to previous page
  const router = useRouter();
  // Back to previous page from /preview
  const goBack = () => {
    router.back();
  };

  // Get existing user through clerk
  const { user } = useUser();

  // Query for link data
  const linksData = useQuery(api.getLinks.getLinks, { userId: user?.id || "" });

  useEffect(() => {
    if (linksData) {
      linksData.forEach((link) => {
        console.log(link.platform);
        setLinkCopy((prev) => ({
          ...prev,
          [link.platform]: link.link,
        }));
      });
    }
  }, [linksData]);

  const copyToClipboard = () => {
    if (linksData) {
      navigator.clipboard.writeText(JSON.stringify(linkCopy)); // Copies the links to clipboard
    }
  };

  return (
    <div className="mb-8 bg-white">
      {pathname !== "/preview" ? (
        <div className="flex flex-row justify-between items-center mb-4">
          <Logo />
          <div className="flex flex-row">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={clsx("flex flex-row py-2 px-6 rounded-lg gap-2", {
                    "bg-disabled": pathname === link.href,
                  })}
                >
                  <Image
                    src={link.icon}
                    width={15}
                    height={15}
                    alt={link.linkAlt}
                    style={{ objectFit: "contain" }}
                  />
                  <p
                    className={clsx("mobile:hidden", {
                      "text-primary": pathname === link.href,
                      "text-secondaryText": pathname !== link.href,
                    })}
                  >
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
          <Link
            href={"/preview"}
            className="border-2 p-3 rounded-lg border-primary text-primary"
          >
            <Image
              src="/eye.png"
              width={15}
              height={10}
              alt="Preview eye"
              className="tablet:hidden desktop:hidden"
            />
            <p className="mobile:hidden">Preview</p>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between">
          <SecondaryButton
            children="Back to Editor"
            onClick={goBack}
            widthSmall
          />
          <PrimaryButton
            children="Share Link"
            type="submit"
            onClick={copyToClipboard}
            widthSmall
          />
        </div>
      )}
    </div>
  );
}
