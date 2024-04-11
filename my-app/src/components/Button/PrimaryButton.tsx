import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
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
