const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const configs = {
    entry: {
        common: [path.join(__dirname, './src/index.js')],
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js',
        publicPath: '../dist/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: 'src',
        inline: true
    },
    module: {
        rules: [
            {test: /\.(less|css)$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=20&name=[hash:8]-[name].[ext]']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js&/, use: ['babel-loader'], exclude:/node_modules/ },
            {test: /\.vue$/, use: 'vue-loader'},
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
module.exports = configs;