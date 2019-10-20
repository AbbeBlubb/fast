const path = require('path'); // import will not work outside a module
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development', //FIXA DETTA FÖR PROD 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
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
      }
    ]
  },

  plugins: [

    // För att kunna ladda in bundlar dynamiskt i ett index.html. Behövs för webpack dev server då den feedar från build-mappen
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })

  ]
};

module.exports = config; // export will not work outside a module
