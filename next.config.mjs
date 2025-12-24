/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  },
  compress: true,
  poweredByHeader: false
};

export default nextConfig;

