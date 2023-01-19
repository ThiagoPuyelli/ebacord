/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '__nextDefaultLocale': { page: '__nextDefaultLocale' },
      '/contact': { page: '/contact' },
      '/course': { page: '/course' }
    }
  },
  images: {
    loader: 'akamai',
    path: 'public/img',
    unoptimized: true
  }
}

module.exports = nextConfig
