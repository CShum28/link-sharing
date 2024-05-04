/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "formal-avocet-202.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
