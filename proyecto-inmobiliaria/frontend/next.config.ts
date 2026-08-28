import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/properties/:path*",
        destination: "/propiedades/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
