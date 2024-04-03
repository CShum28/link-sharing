import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-primary bg-white h-12 rounded-md w-full border-2 border-primary active:bg-active"
      }
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
