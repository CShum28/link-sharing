import React from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

interface Profile {
  photo: File | null;
  firstName: string;
  lastName: string;
  email: string;
}

interface UpdateProfileProps {
  profile: Profile;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({
  profile,
  onTextChange,
  onFileChange,
  submit,
}) => {
  return (
    <div className="text-secondaryText">
      <form onSubmit={submit}>
        <div className="bg-background p-6 rounded-md my-8">
          <p>Profile picture</p>
          <label className="flex flex-col justify-center items-center h-48 w-48 bg-disabled rounded-lg hover:cursor-pointer my-6">
            <input
              type="file"
              name="photo"
              onChange={onFileChange}
              className="hidden"
            />
            <Image
              src="/image.png"
              width={40}
              height={40}
              alt={"picture of image"}
            />
            <p className="text-primary font-semibold mt-3">+ Upload Image</p>
          </label>
          <p className="text-xs">
            Image must be below 1024x1024px. Use PNG or FPG format.
          </p>
        </div>
        <div className="bg-background p-6 rounded-md">
          <div className="mb-4">
            <p>First name*</p>
            <input
              name="firstName"
              type="text"
              className="w-full p-3 border-2 rounded-md"
              value={profile.firstName}
              onChange={onTextChange}
            />
          </div>
          <div className="my-4">
            <p>Last name*</p>
            <input
              name="lastName"
              type="text"
              className="w-full p-3 border-2 rounded-md"
              value={profile.lastName}
              onChange={onTextChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              name="email"
              type="email"
              className="w-full p-3 border-2 rounded-md"
              value={profile.email}
              onChange={onTextChange}
            />
          </div>
        </div>
        <div className="border-t-2 p-3 bg-background rounded-b-lg">
          <PrimaryButton children="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
