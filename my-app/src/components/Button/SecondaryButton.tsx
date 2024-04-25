import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  widthFull?: boolean;
  widthSmall?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  widthFull,
  widthSmall,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-primary bg-white h-12 rounded-lg border-2 border-primary active:bg-active" +
        `${widthFull ? " w-full" : ""}` +
        `${widthSmall ? " w-36" : ""}`
      }
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
