/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: {
      allowedOrigins: [
        'https://agentic-a7432f80.vercel.app',
        'http://localhost:3000'
      ]
    }
  }
};

export default nextConfig;
