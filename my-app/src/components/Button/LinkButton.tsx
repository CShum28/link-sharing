import React from "react";
import { ArrowRight } from "lucide-react";

interface LinkButtonProps {
  name: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name }) => {
  return (
    <div className="my-3">
      <button className="flex flex-row w-60 border-2 justify-between py-3 px-4 rounded-lg">
        <div>
          <p className="capitalize">{name}</p>
        </div>
        <ArrowRight />
      </button>
    </div>
  );
};

export default LinkButton;
