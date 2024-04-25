import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  widthFull?: boolean;
  widthSmall?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
  widthFull,
  widthSmall,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "text-white h-12 rounded-lg border-2 " +
        `${
          disabled
            ? "bg-disabled cursor-not-allowed"
            : "bg-primary active:bg-active"
        }` +
        `${widthFull ? " w-full" : ""}` +
        `${widthSmall ? " w-36" : ""}`
      }
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
