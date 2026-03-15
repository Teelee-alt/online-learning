/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.join(__dirname, '.next/cache'),
      buildDependencies: {
        config: [__filename],
      },
      // Optimize cache serialization for large strings
      managedPaths: isServer ? [path.join(__dirname, 'node_modules')] : undefined,
      hashAlgorithm: 'md4',
      name: `${isServer ? 'server' : 'client'}-${Date.now()}`,
      // Use Buffer instead of strings for large data
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      store: 'pack',
    }
    return config
  },
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig
