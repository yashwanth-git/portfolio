// Webpack uses this to work with directories
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin its work
  entry: "./src/main.js",

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: './dist/assets/images/'
        },
      },
      {
        test: /src\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "src/index.html",
      filename: "../dist/index.html",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
      },
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'assets'),
      },
      compress: true,
      port: 9000,
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  mode: "development",
};
