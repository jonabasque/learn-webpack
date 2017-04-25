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
    devServer: {
        contentBase: [ path.join(__dirname, "assets/html/dist"),
                       path.join(__dirname, "assets/css/dist"),
                       path.join(__dirname, "assets/js/dist")],
        compress: true,
        stats: 'errors-only',
        port: 9000,
        watchContentBase: true,
        open: true
    },
    module:{
        rules: [
            {
                test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
                use: 'babel-loader',
                include: path.join(__dirname, 'assets', 'js', 'src'), //solo pasarán al loader los archivos .js de este directorio
                //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
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
            hash: true,
            inject: true,
            chunks: ['groups']

        }),
        new HtmlPlugin({
            title: 'Contact page',
            filename: 'html/dist/contact.html',
            template: './html/src/contact.ejs',
            hash: true,
            inject: false
        }),
        new HtmlPlugin({
            filename: 'html/dist/index.html',
            template: './html/src/index.ejs',
            hash: true,
            inject: true,
            chunks: ['index']
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ]
};
