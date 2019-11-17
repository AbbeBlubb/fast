const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]' // [path][name].[ext]
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled:true,
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }

    ]
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].css'
    })

  ]
};
