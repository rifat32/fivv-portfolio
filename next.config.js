module.exports = {
  env: {
    NEXT_PUBLIC_LASTFM_API_KEY: 'ebe2c441c37e356caefe318275757b53',

  },
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ven',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/venolol',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/204616460797083648',
        permanent: true,
      },
    ]
  },
}
