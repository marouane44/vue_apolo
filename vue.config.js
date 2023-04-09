module.exports = {
  outputDir: "dist",

  devServer: {
    proxy: {
      "/api": {
        target: "https://master--remarkable-mooncake-fc9763.netlify.app/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
