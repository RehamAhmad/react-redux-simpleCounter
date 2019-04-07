
const path = require('path');

module.exports = {
  entry: {
    app: './public/js/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
},
module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude:/(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }
    ]
},
watch:true

};