module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}
