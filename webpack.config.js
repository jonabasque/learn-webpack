var path = require('path');

module.exports = {
    context: path.join(__dirname, 'assets', 'js', 'src'),
    entry: {
        index : './index/index.js',
        groups: './groups/groups.js'
    },
    output: {
        path: path.join(__dirname, 'assets', 'js', 'dist'),
        //publicPath: 'assets',
        filename: '[name].bundle.js'
    }
};
