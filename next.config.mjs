/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 도메인 허용
      },
    ],
  },
  experimental: {
    appDir: true, // app 디렉토리 활성화
  },
};

export default nextConfig;
