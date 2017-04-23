var path = require('path');

module.exports = {
    entry: {
        index : path.join(__dirname, 'assets', 'js', 'src', 'index', 'index.js'),
        groups: path.join(__dirname, 'assets', 'js', 'src', 'groups', 'groups.js')
    },
    output: {
        path: path.join(__dirname, 'assets', 'js', 'dist'),
        //publicPath: 'assets',
        filename: '[name].bundle.js'
    }
};
