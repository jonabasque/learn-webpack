var path = require('path');

module.exports = {
    entry: './assets/js/src/app.js',
    output: {
        path: path.join(__dirname, 'assets/js/dist'),
        //publicPath: 'assets',
        filename: 'app.bundle.js'
    }
};
