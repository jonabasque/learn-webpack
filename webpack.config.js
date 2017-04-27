var path = require('path');
var webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('assets/css/[name].css');

var isProd = process.env.NODE_ENV === 'production'; //true or false
var cssDev = ['style-loader', 'css-loader'];
var cssProd =  ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader'],
    //publicPath: 'assets/css'
});

var cssConfig = isProd ? cssProd : cssDev ;

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
        //contentBase: false, //TOKNOW: FALSE ??
        contentBase: [ path.join(__dirname, "assets/html/dist"),
                       path.join(__dirname, "assets/css/dist"),
                       path.join(__dirname, "assets/js/dist")],
        compress: true,
        stats: 'errors-only',
        hot: true,
        // enable HMR on the server
        port: 9000,
        watchContentBase: true, //TOKNOW: IS NOT NECESARY ??
        open: true //abre el navegador al iniciar el dev-server no al rebuild
    },
    resolve: {
        alias: {
            'css' : path.join(__dirname, 'assets', 'css', 'src')
        }
    },
    module:{
        rules: [
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
                use: 'babel-loader',
                include: path.join(__dirname, 'assets', 'js', 'src'), //solo pasarán al loader los archivos .js de este directorio
                //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
            },
            {
                test: /\.css$/,
                use: cssConfig
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
            filename: 'css/dist/[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
};
