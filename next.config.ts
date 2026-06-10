import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.38",
    "192.168.1.*",
    "192.168.*",
    "10.*",
  ],
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
