// ES2015 module system import and export will not work in this file. Use require and module.exports
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {

  mode: 'development', //FIXA DETTA FÖR PROD

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: 'build/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  devServer: {
    contentBase: './build'
  },

  module: {
    rules: [

      // Babel: in cases, it needs a .babelrc-file in the root folder
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [

    // För att kunna ladda in bundlar dynamiskt i ett index.html. Behövs för webpack dev server då den feedar från build-mappen
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    })

  ]
};

module.exports = config;
