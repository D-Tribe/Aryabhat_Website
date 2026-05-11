import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/aryabhat",
  assetPrefix: "/aryabhat/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/aryabhat",
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: { unoptimized: true },
//   basePath: "/Aryabhat_Website",
//   assetPrefix: "/Aryabhat_Website/",
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
