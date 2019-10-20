const path = require('path'); // import will not work outside a module
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development', //FIXA DETTA FÖR PROD 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'build/'
  },
  devServer: {
    contentBase: './build'
  },

  module: {
    rules: [

      // Babel: needs an .babelrc-file in the root folder
      {
        test: /\.js$/, // Apply Babel only on .js-files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
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
      filename: '[name].css'
    })

  ]
};

module.exports = config; // export will not work outside a module
