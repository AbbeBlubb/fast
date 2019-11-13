// ES2015 module system import and export will not work in this file. Use require and module.exports
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    //To load index.html in any 404 responses:
    historyApiFallback: true
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

    // För att kunna ladda in bundlar dynamiskt i ett index.html. Behövs för webpack dev server då den feedar från build-mappen
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new ManifestPlugin(),

    new CopyPlugin([
      { from: 'src/assets-href', to: 'assets-href' }
    ])

  ]
};
