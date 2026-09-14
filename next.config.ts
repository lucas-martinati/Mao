import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deckofcardsapi.com",
        pathname: "/static/img/**",
      },
    ],
  },
};

export default nextConfig;
