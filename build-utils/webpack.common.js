const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

// Content for builds & dev server. Made as function to recieve the env var from webpack.config.js
module.exports = env => {

  console.log('Env is: ', env);

  return {

    entry: {
      bundle: './src/index.js'
    },

    output: {
      path: path.resolve(__dirname, '../', 'build'),
      filename: env === 'prod' ? '[name].[contenthash].js': '[name].js',
      chunkFilename: env === 'prod' ? '[name].[contenthash].js' : '[name].js',
      publicPath: ''
    },

    optimization: {
      moduleIds: 'hashed', // For contenthash, when moduleid is changed
      runtimeChunk: 'single', // Runtime bundle needed for contenthash, as the runtime will change for each build
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
        filename: env === 'prod' ? '[name].[contenthash].css' : '[name].css'
      }),

     new HtmlWebpackPlugin({
        template: './src/index.html'
      }),

      new ManifestPlugin(),

      new CopyPlugin([{
        from: 'src/assets-href',
        to: 'assets-href'
      }]),

      new WebpackShellPlugin({
        onBuildEnd:['echo "TEST from WebpackShellPlugin - webpack.prod.js"']
      })

    ]

  };
};
