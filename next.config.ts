import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/material-nextjs"],
  },
  productionBrowserSourceMaps: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);