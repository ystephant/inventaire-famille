/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exclure le service worker du build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
