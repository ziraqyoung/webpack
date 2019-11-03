module.exports = {
  entry: { main: "./src/index", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
