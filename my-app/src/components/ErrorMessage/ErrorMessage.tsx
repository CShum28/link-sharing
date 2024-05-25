import React from "react";
import { CircleAlert } from "lucide-react";

const ErrorMessage = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-center my-3 bg-red-400 p-4 rounded-xl text-white mx-3 text-center">
      <CircleAlert />
      <p>Please ensure all information is entered properly</p>
      <CircleAlert />
    </div>
  );
};

export default ErrorMessage;
