import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <Image src="/logo.png" width={33.33} height={33.33} alt="DevLinks Logo" />
      <Image
        src="/devlinks.png"
        width={135}
        height={26.25}
        alt="Let's get started image"
        className="mobile:hidden"
      />
    </div>
  );
};

export default Logo;
