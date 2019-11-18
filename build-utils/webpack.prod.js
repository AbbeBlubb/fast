const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin() // Only in webpack.prod.js, to avoid dev server to delete the images in dev
  ]
};
