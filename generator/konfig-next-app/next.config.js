/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'portal.konfigthis.com',
        },
      ],
      destination: '/konfig-dev/acme-sdks/:path*',
    },
  ],
}

module.exports = nextConfig
