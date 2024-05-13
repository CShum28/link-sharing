import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface LinkButtonProps {
  platform: string;
  color: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ platform, color }) => {
  console.log(color);
  return (
    <div className="my-3">
      <button
        className="flex flex-row w-60 justify-between py-3 px-4 rounded-lg"
        style={{ backgroundColor: `#${color}` }}
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
