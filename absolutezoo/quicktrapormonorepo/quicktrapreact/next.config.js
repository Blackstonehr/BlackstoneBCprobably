/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Tell Next.js to transpile the local UI package.
  // This is the modern way to use local packages in a Next.js app.
  transpilePackages: ["@blackstone/core"],
};

module.exports = nextConfig;
