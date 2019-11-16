const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: ''
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
    contentBase: path.resolve(__dirname, '../', 'build'),
    port: 8000,
    historyApiFallback: true
  },

  module: {
    rules: [

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
      },

      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/assets/[name].[ext]' // [path][name].[ext]
          }
        }
      }

    ]
  },

  plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new ManifestPlugin(),

    new CopyPlugin([{
      from: 'src/assets-href',
      to: 'assets-href'
    }])

  ]
};
