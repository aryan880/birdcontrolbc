import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/migration/legacy-redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.birdcontrolbc.ca" }],
        destination: "https://birdcontrolbc.ca/:path*",
        permanent: true,
      },
      ...legacyRedirects.map((redirect) => ({ ...redirect, permanent: true })),
    ];
  },
};

export default nextConfig;
