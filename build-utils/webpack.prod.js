const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new WebpackShellPlugin({
      onBuildEnd:['echo "TEST from WebpackShellPlugin"']
    })
  ]
};
