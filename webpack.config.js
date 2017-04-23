var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './assets/js/src/app.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8082'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'assets/js/dist'),
        publicPath: 'assets/js/dist',
        filename: 'app.bundle.js'
    }
};
