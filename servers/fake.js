process.env.NODE_ENV = 'development';
process.on('unhandledRejection', (err) => {
  throw err;
});

const PORT = 45081;

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.fake.config.js');

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  watchOptions: {
    ignored: /node_modules/,
  },
  historyApiFallback: {
    index: '/fake.html'
  },
  disableHostCheck: true
});

devServer.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('Development server listening on port ', PORT);
});
