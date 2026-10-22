import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  transpilePackages: ["@ginga-ui/core", "@ginga-ui/utils"],
};

export default nextConfig;
