import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface LinkButtonProps {
  platform: string;
  color: string;
  link: string;
}

const openInNewTab =
  (url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Ensure the URL is absolute
    const absoluteUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `http://${url}`;
    window.open(absoluteUrl, "_blank");
  };

const LinkButton: React.FC<LinkButtonProps> = ({ platform, color, link }) => {
  return (
    <div className="my-3">
      <button
        className="flex flex-row w-60 justify-between py-3 px-4 rounded-lg"
        style={{ backgroundColor: `#${color}` }}
        onClick={openInNewTab(link)}
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            src={`/LinkLogo/${platform}.png`}
            width={20}
            height={10}
            alt="logo icon"
          />
          <p className="capitalize text-white">{platform}</p>
        </div>
        <ArrowRight className="text-white" />
      </button>
    </div>
  );
};

export default LinkButton;
