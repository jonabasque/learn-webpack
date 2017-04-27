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
    context: path.join(__dirname, 'src', 'client'),
    entry: {
        'index' : './js/index/index.js',
        'groups': './js/groups/groups.js'
    },
    output: {
        path: path.join(__dirname, 'dist'), //ha de ser absoluta.
        //publicPath: 'assets/js', //TODO: para que sirve este??
        filename: 'assets/js/[name].bundle.js'
    },
    devServer: {
        //contentBase: false, //TOKNOW: FALSE ??
        contentBase: path.join(__dirname, "dist"),
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
            'css' : path.join(__dirname, 'src', 'client', 'css')
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/, //si la expresión regular devuelve true, por lo que lo va a usar este cargador .
                use: 'babel-loader',
                include: path.join(__dirname, 'src', 'client', 'js'), //solo pasarán al loader los archivos .js de este directorio
                //exclude: /node_modules/ //desde la raiz del proyecto excluira lo que indique esta exReg.
            },
            {
                test: /\.css$/,
                use: cssConfig
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Goups page',
            filename: 'groups.html', //relative to output.path attr
            template: './html/groups.ejs', //relative to context attr
            hash: true,
            inject: true,
            chunks: ['groups']

        }),
        new HtmlPlugin({
            title: 'Contact page',
            filename: 'contact.html', //relative to output.path attr
            template: './html/contact.ejs', //relative to context attr
            hash: true,
            inject: false
        }),
        new HtmlPlugin({
            filename: 'index.html', //relative to output.path attr
            template: './html/index.ejs', //relative to context attr
            hash: true,
            inject: true,
            chunks: ['index']
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/[name].css', //relative to output.path attr
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
};
