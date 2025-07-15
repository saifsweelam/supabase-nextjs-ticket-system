import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedEnv: true
  },
  redirects: async () => [
    {
      source: "/logout",
      destination: "/auth/logout",
      permanent: true
    },
    {
      source: "/dashboard",
      destination: "/dashboard/tickets",
      permanent: true
    }
  ]
};

export default nextConfig;
