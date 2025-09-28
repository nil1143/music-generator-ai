/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    // If you already have domains/remotePatterns, merge instead of replacing
    remotePatterns: [
      {
        protocol: "https",
        hostname: "music-generator-nil.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
    ],

    // alternatively:
    // domains: ['music-generator-nil.s3.eu-north-1.amazonaws.com'],
  },
};

export default config;
