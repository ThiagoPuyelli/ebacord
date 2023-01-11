/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' }
    }
  },
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true
  }
}

module.exports = nextConfig
