import React from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

interface Profile {
  photo: any;
  photoPreview: any;
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
        <div className="bg-background p-6 rounded-md my-8 tablet:flex desktop:flex tablet:items-center desktop:items-center tablet:justify-between desktop:justify-between">
          <div className="desktop:w-4/12">
            <p>Profile picture</p>
          </div>

          <div className="tablet:flex desktop:w-8/12 tablet:w-8/12 desktop:flex tablet:items-center desktop:items-center tablet:gap-4 desktop:gap-4">
            {profile?.photo ? (
              // If profile photo exists, display this
              <>
                <label className="flex flex-col justify-center items-center h-48 w-48 rounded-lg hover:cursor-pointer my-6">
                  <input
                    type="file"
                    name="photo"
                    onChange={onFileChange}
                    className="hidden"
                  />
                  <img
                    src={profile.photoPreview}
                    alt="Profile Photo"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </label>
              </>
            ) : (
              // If profile photo does not exist yet, display this
              <>
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
                  <p className="text-primary font-semibold mt-3">
                    + Upload Image
                  </p>
                </label>
              </>
            )}
            <p className="text-xs tablet:w-36 desktop:w-36">
              Image must be below 1024x1024px. Use PNG or FPG format.
            </p>
          </div>
        </div>

        <div className="bg-background p-6 rounded-md">
          {/* First Name */}
          <div className="mb-4 tablet:flex desktop:flex">
            <div className="desktop:w-4/12 tablet:w-4/12">
              <p>First name*</p>
            </div>
            <input
              name="firstName"
              type="text"
              className="mobile:w-full tablet:grow desktop:grow p-3 border-2 rounded-md"
              value={profile?.firstName}
              onChange={onTextChange}
            />
          </div>

          {/* Last Name */}
          <div className="mb-4 tablet:flex desktop:flex">
            <div className="desktop:w-4/12 tablet:w-4/12">
              <p>Last name*</p>
            </div>
            <input
              name="lastName"
              type="text"
              className="mobile:w-full tablet:grow desktop:grow p-3 border-2 rounded-md"
              value={profile?.lastName}
              onChange={onTextChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4 tablet:flex desktop:flex">
            <div className="desktop:w-4/12 tablet:w-4/12">
              <p>Email*</p>
            </div>
            <input
              name="email"
              type="email"
              className="mobile:w-full tablet:grow desktop:grow p-3 border-2 rounded-md"
              value={profile?.email}
              onChange={onTextChange}
            />
          </div>
        </div>
        <div className="border-t-2 p-3 bg-background rounded-b-lg">
          <PrimaryButton children="Save" type="submit" widthFull />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
