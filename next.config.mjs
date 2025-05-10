/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix static asset loading issues
  output: 'standalone',
  
  // Configure allowed image domains
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'firebasestorage.googleapis.com'],
  },
  
  // Ensure proper asset prefix for development and production
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? undefined 
    : undefined,
  
  // Add redirects for common missing files
  async redirects() {
    return [
      {
        source: '/_next/static/:path*',
        missing: [
          {
            type: 'header',
            key: 'x-nextjs-data',
          },
        ],
        permanent: false,
        destination: '/api/static-fallback?path=:path*',
      },
    ]
  }
};

export default nextConfig; 