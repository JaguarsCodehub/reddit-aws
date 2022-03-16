/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "redditaws8fa6b7497fe8470590b9489af9be78e9113506-dev.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
