/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    unoptimized: true, 
  },
  compiler: {
    removeConsole: isProd,
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'resumex.top'],
};

export default nextConfig;
