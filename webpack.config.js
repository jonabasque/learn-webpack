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
    },
    module:{
        loaders: [
            {
                test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
                loader: 'babel-loader',
                include: path.join(__dirname, 'assets', 'js', 'src'), //solo pasarán al loader los archivos .js de este directorio
                //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
            }
        ]
    }
};
