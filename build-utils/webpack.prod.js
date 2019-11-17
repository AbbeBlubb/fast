const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new ManifestPlugin(),

    new CopyPlugin([{
      from: 'src/assets-href',
      to: 'assets-href'
    }]),


    new WebpackShellPlugin({
      onBuildEnd:['echo "TEST from WebpackShellPlugin"']
    })

  ]
};
