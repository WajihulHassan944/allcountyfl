import type { NextConfig } from "next";

// The bathroom remodeling and team pages are also served on the client's
// main domain (allcountyfl.com) by a small WordPress proxy snippet. Loading
// JS/CSS/fonts from this deployment's own origin keeps them working there.
const APP_ORIGIN = "https://allcountyfl.vercel.app";
const isVercelProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  assetPrefix: isVercelProduction ? APP_ORIGIN : undefined,
  async headers() {
    return [
      {
        // Fonts and other static assets are requested cross-origin when the
        // pages are viewed on allcountyfl.com.
        source: "/_next/static/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bathroom-remodeling",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
