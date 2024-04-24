"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "customize link",
    href: "/customize-link",
    icon: "/links.png",
    linkAlt: "Customized link icon",
  },
  {
    name: "profile",
    href: "/profile",
    icon: "/profile.png",
    linkAlt: "Profile link icon",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <Logo />
      <div className="flex flex-row">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              className={clsx("py-2 px-6 rounded-lg", {
                "bg-disabled": pathname === link.href,
              })}
            >
              <Image
                src={link.icon}
                width={20}
                height={20}
                alt={link.linkAlt}
              />
            </Link>
          );
        })}
      </div>
      <Link
        href={"/preview"}
        className="border-2 p-3 rounded-lg border-primary"
      >
        <Image
          src="/eye.png"
          width={15}
          height={10}
          alt="Preview eye"
          className="text-primary"
        />
      </Link>
    </div>
  );
}
