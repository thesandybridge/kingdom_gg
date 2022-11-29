/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  experimental: {appDir: true},
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    domains: ['cdn.discordapp.com']
  },
}

export default nextConfig
