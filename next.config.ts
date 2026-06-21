import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "kharbmedia.com" },
    ],
  },
};

export default nextConfig;
