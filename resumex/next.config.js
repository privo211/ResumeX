const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
  },
  compiler: {
    removeConsole: isProd,
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'resumex.top'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
