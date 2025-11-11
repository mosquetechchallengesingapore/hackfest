import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // For Cloudflare Pages, we might need to use static export
  // Uncomment the line below if static export is needed
  // output: 'export',
};

export default nextConfig;
