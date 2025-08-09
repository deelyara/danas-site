import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },
  // Suppress hydration warnings for browser extensions
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Custom webpack config to handle hydration warnings
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Suppress specific hydration warnings in development
      const originalConsoleError = console.error;
      console.error = (...args) => {
        if (
          typeof args[0] === 'string' &&
          (args[0].includes('data-scholarcy-content-script-executed') ||
           args[0].includes('Hydration failed because the initial UI does not match') ||
           args[0].includes('There was an error while hydrating'))
        ) {
          return;
        }
        originalConsoleError(...args);
      };
    }
    return config;
  },
};

export default nextConfig;
