import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/contact2", destination: "/drivercontact", permanent: true }];
  },
};

export default nextConfig;
