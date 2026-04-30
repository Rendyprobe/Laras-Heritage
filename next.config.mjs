import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "siakadu.unesa.ac.id",
        pathname: "/photo/fotomhs/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
