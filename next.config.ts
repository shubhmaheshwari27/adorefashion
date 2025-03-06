import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // Allow images from example.com
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false, // Ensure TypeScript errors are not ignored
  },
  webpack(config, { isServer }) {
    // Add custom Webpack configurations here if necessary
    return config;
  },
};

export default nextConfig;
