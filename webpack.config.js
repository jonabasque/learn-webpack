var path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('assets/css/[name].css');


module.exports = {
    context: path.join(__dirname, 'assets'),
    entry: {
        index : './js/src/index/index.js',
        groups: './js/src/groups/groups.js'
    },
    output: {
        path: path.join(__dirname, 'assets'), //ha de ser absoluta.
        //publicPath: 'assets/js', //TODO: para que sirve este??
        filename: 'js/dist/[name].bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
                loader: 'babel-loader',
                include: path.join(__dirname, 'assets', 'js', 'src'), //solo pasarán al loader los archivos .js de este directorio
                //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    //publicPath: 'assets/css'
                })
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Goups page',
            filename: 'groups.html',
            template: './templates/groups.html',
            hash: true

        }),
        new HtmlPlugin({
            title: 'Contact page',
            filename: 'contact.html',
            template: './templates/contact.html'
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: './templates/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ]
};
