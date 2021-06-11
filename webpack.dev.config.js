const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const opts = {
  FAKE: false,
  DEBUG: true,
  PROD: false
};

module.exports = {
  entry: {
    app: [
      'whatwg-fetch',
      '@babel/polyfill',
      path.resolve(__dirname, './entry/entry.jsx'),
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: [
          '/node_modules/'
        ],
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },
        { loader: 'ifdef-loader', options: opts }]
      },
      {
        test: /components-react.*\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  minify: false,
                  pure: true
                }
              ],
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-json-strings',
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true
                }
              ],
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-throw-expressions',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-logical-assignment-operators',
              '@babel/plugin-proposal-optional-chaining',
              [
                '@babel/plugin-proposal-pipeline-operator',
                {
                  proposal: 'minimal'
                }
              ],
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-do-expressions',
              '@babel/plugin-proposal-function-bind'
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader?name=assets/[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      './',
      'node_modules']
  },
  output: {
    path: `${__dirname}/../Server/wwwroot/js`,
    publicPath: '/js/',
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './config.dev.json', to: path.join(__dirname, '../Server/wwwroot/js/config.json') },
    ], {
      copyUnmodified: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './templates/_Layout.cshtml'),
      filename: path.join(__dirname, '../Server/Views/Shared/_Layout.cshtml'),
    })
  ],
  externals: {
    Configuration: 'Configuration'
  },
  watch: true
};
