module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/index.html': { page: '/index' },
    };
  },
};
