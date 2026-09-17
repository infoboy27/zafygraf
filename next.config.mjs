/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/zafy-logo.jpg',
        destination: '/zafy-logo.svg',
      },
    ];
  },
};

export default nextConfig;
