import React, { useState, useEffect } from "react";

interface LinkInfo {
  number: number;
  platform: string;
  link: string;
  placeholder: string;
}

interface AddLinkProps {
  linkInfo: LinkInfo; // Using the LinkInfo interface as defined previously
  updateLink: (link: LinkInfo) => void;
  deleteLink: (number: number) => void;
}

interface Options {
  image: string;
  value: string;
  label: string;
  placeholder: string;
}

const options: Options[] = [
  {
    image: "",
    value: "github",
    label: "Github",
    placeholder: "eg. https://github.com/username",
  },
  {
    image: "",
    value: "frontendMentor",
    label: "Frontend Mentor",
    placeholder: "eg. https://www.frontendmentor.io/profile/username",
  },
  {
    image: "",
    value: "twitter",
    label: "Twitter",
    placeholder: "eg. https://twitter.com/username",
  },
  {
    image: "",
    value: "linkedIn",
    label: "LinkedIn",
    placeholder: "eg. https://www.linkedin.com/in/username",
  },
  {
    image: "",
    value: "youTube",
    label: "YouTube",
    placeholder: "eg. https://www.youtube.com/c/username",
  },
  {
    image: "",
    value: "facebook",
    label: "Facebook",
    placeholder: "eg. https://www.facebook.com/username",
  },
  {
    image: "",
    value: "twitch",
    label: "Twitch",
    placeholder: "eg. https://www.twitch.tv/username",
  },
  {
    image: "",
    value: "devTo",
    label: "Dev.to",
    placeholder: "eg. https://dev.to/username",
  },
  {
    image: "",
    value: "codewars",
    label: "Codewars",
    placeholder: "eg. https://www.codewars.com/users/username",
  },
  {
    image: "",
    value: "codepen",
    label: "Codepen",
    placeholder: "eg. https://codepen.io/username",
  },
  {
    image: "",
    value: "freeCodeCamp",
    label: "freeCodeCamp",
    placeholder: "eg. https://www.freecodecamp.org/username",
  },
  {
    image: "",
    value: "gitLab",
    label: "GitLab",
    placeholder: "eg. https://gitlab.com/username",
  },
  {
    image: "",
    value: "hashnode",
    label: "Hashnode",
    placeholder: "eg. https://username.hashnode.dev",
  },
  {
    image: "",
    value: "stackOverflow",
    label: "Stack Overflow",
    placeholder: "eg. https://stackoverflow.com/users/userid/username",
  },
];

// Functional component using props destructuring
const AddLink: React.FC<AddLinkProps> = ({
  linkInfo,
  updateLink,
  deleteLink,
}) => {
  const [link, setLink] = useState<LinkInfo>({
    number: linkInfo.number,
    platform: linkInfo.platform,
    link: linkInfo.link,
    placeholder: linkInfo.placeholder,
  });

  // This effect ensures that the local state of this component remains in sync with its props.
  // Whenever `linkInfo` changes (for example, when a link is deleted and the parent component
  // renumbers the remaining links), this effect updates the local state to reflect those changes.
  // This is essential to ensure that the local state doesn't become stale and the UI always
  // shows the current data from the parent component.
  useEffect(() => {
    setLink(linkInfo);
  }, [linkInfo]);

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedLink = { ...link, platform: e.target.value };
    setLink(updatedLink);
    updateLink(updatedLink);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = { ...link, link: e.target.value };
    setLink(updatedLink);
    updateLink(updatedLink);
  };

  return (
    <div className="bg-background w-full p-4 rounded-md my-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <p className="text-secondaryText">=&nbsp;</p>
          <p className="text-text">Link #{linkInfo.number}</p>
        </div>
        <button
          className="text-secondaryText"
          onClick={() => deleteLink(link.number)}
        >
          Remove
        </button>
      </div>
      <div className="mt-2">
        <p className="text-sm text-text">Platform</p>
        <select
          value={link.platform}
          onChange={handlePlatformChange}
          className="w-full p-3 border-2 rounded-md"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="my-2">
        <p className="text-sm text-text">Link</p>
        <input
          type="string"
          className="w-full p-3 border-2 rounded-md"
          placeholder={link.placeholder}
          value={link.link}
          onChange={handleLinkChange}
        />
      </div>
    </div>
  );
};

export default AddLink;
