const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'login-signup': './src/js/pages/login-signup.js',
        'home': './src/js/pages/home.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', //remove all files with subdirectories irrespective of the number of subdirectories
                path.join(process.cwd(), 'build/**/*'), // will remove all files & subdirs inside the build folder. 
            ]// an array to specify the file patterns you want to remove
            //
        }),
        new HtmlWebpackPlugin({
            filename: 'login-signup.html',
            chunks: ['login-signup'],
            title: 'Login/SignUp',
            template: 'src/html/login-signup.html',
            description: 'Login/Signup Page'
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            chunks: ['home'],
            title: 'Home',
            template: 'src/html/home.html',
            description: 'Home Page'
        }),
    ],

};