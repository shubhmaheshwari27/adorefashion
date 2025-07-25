import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // You can keep this or remove if unused
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Added Google image host
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false, // Keep strict TypeScript checks
  },
  webpack(config, { isServer }) {
    // Add custom Webpack configurations here if necessary
    return config;
  },
};

export default nextConfig;
