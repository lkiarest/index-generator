const path = require('path')

module.exports = {
  mode: 'production',
  entry: './server.js',
  output: {
    filename: 'app.js',
    path: __dirname
  },
  target: 'node',
  node: {
    __dirname: false
  }
}
