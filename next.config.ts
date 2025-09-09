import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Add Cloudinary
      },
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
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": __dirname, // ✅ Adds @/ alias for project root
    };
    return config;
  },
};

export default nextConfig;
