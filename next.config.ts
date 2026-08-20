import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/migration/legacy-redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;
