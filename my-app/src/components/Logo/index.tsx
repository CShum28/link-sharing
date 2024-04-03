import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img
        src="/logo.png"
        alt="DevLinks Logo"
        style={{ width: "33.33px", height: "33.33px", margin: "0 10px 0 0" }}
      />
      <img
        src="/devlinks.png"
        alt="DevLinks"
        style={{ width: "135px", height: "26.25px" }}
      />
    </div>
  );
};

export default Logo;
