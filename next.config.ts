import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.132"],
  async headers() {
    const noCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate",
      },
    ];

    return [
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: noCache,
      },
      {
        source: "/apple-touch-icon.png",
        headers: noCache,
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        headers: noCache,
      },
      {
        source: "/apple-touch-icon-180x180.png",
        headers: noCache,
      },
    ];
  },
};

export default nextConfig;
