import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL);
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
