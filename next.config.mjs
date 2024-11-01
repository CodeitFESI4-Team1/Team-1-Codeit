/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/,
    });
    config.module.rules.push({
      test: /\$/i,
      issuer: fileLoaderRule.issuer || /\.[jt]sx?$/,
      resourceQuery: {
        not: fileLoaderRule.resourceQuery?.not
          ? [...fileLoaderRule.resourceQuery.not, /url/]
          : [/url/],
      },
      use: ['@svgr/webpack'],
    });

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 도메인 허용
      },
    ],
  },
};
export default nextConfig;
