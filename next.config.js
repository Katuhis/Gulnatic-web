/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
