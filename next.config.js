module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/login/',
        destination: '/app/login/',
        permanent: true,
      },
    ];
  },
};
