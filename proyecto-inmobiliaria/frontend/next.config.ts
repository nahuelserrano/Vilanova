import type { NextConfig } from "next";
const cloudfrontHost =
  (process.env.CLOUDFRONT_DOMAIN || '').replace(/^https?:\/\//, '').split('/')[0] || '';


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
       ...(cloudfrontHost
        ? [
            {
              protocol: 'https',
              hostname: cloudfrontHost,
            },
          ]
        : []),
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
