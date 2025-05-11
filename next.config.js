/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: '3000'
  },
  images: {
    domains: ['picsum.photos']
  }
}

module.exports = nextConfig