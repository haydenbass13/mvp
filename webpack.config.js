const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  entry: path.join(__dirname, 'server', 'index.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '/public'),
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        PORT: 3030,
      },
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    __dirname: false,
  },
};

const clientConfig = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'window.styled',
  },
};

module.exports = [serverConfig, clientConfig];

