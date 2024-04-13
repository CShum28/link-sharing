import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "text-white h-12 rounded-lg w-full border-2 " +
        `${
          disabled
            ? "bg-disabled cursor-not-allowed"
            : "bg-primary active:bg-active"
        }`
      }
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
