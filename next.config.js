/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.amazon.com.br", "m.media-amazon.com", "ir-br.amazon-adsystem.com", "ws-na.amazon-adsystem.com"],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
