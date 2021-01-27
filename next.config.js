module.exports = {
  publicRuntimeConfig: {
    ROOT_API_URL: process.env.REACT_APP_ROOT_API_URL || "http://localhost:1337",
    ROOT_IMAGE_URL:
      process.env.REACT_APP_ROOT_IMAGE_API_URL || '"http://localhost:1337"',
  },

  images: {
    domains: ["localhost"],
  },
};
