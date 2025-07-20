import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedEnv: true
  },
  redirects: async () => [
    {
      source: "/:tenant/logout",
      destination: "/:tenant/auth/logout",
      permanent: true
    },
    {
      source: "/:tenant/dashboard",
      destination: "/:tenant/dashboard/tickets",
      permanent: true
    }
  ]
};

export default nextConfig;
