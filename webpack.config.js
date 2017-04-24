var path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('assets/css/[name].css');


module.exports = {
    context: path.join(__dirname, 'assets'),
    entry: {
        'index' : './js/src/index/index.js',
        'groups': './js/src/groups/groups.js'
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
            filename: 'html/dist/groups.html',
            template: './html/src/groups.ejs',
            hash: true

        }),
        new HtmlPlugin({
            title: 'Contact page',
            filename: 'html/dist/contact.html',
            template: './html/src/contact.ejs',
            hash: true
        }),
        new HtmlPlugin({
            filename: 'html/dist/index.html',
            template: './html/src/index.ejs',
            hash: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ]
};
