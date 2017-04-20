'use strict';

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    env = env || {};

    let outputPath;
    if (env.production || env.dotnet) {
        outputPath = path.join(__dirname, '..', 'wwwroot', 'js');
    } else {
        outputPath = path.join(__dirname, 'build');
    }

    let plugins;

    if (env.production || env.dotnet) {
        plugins = [];
    } else {
        plugins = [
            new CopyWebpackPlugin([
                {from: '../node_modules/bootstrap/dist', to: 'lib'},
                {from: '../node_modules/jquery/dist', to: 'lib/js'},
                {from: '../node_modules/font-awesome/css', to: 'lib/css'},
                {from: '../node_modules/font-awesome/fonts', to: 'lib/fonts'},
                {from: '../node_modules/vue/dist', to: 'lib/js'},
            ])
        ];
    }


    return {
        context: path.join(__dirname, "src"),
        entry: {
            Profile: './module/Profile/Edit.jsx',
            // Orgnization: './Orgnization.js',
        },
        output: {
            path: outputPath,
            filename: "[name].bundle.js",
            publicPath: ''
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [{
                        loader: "babel-loader",
                        options: {presets: ["es2015", 'react']},
                        // exclude: /node_modules/
                    }],
                },
                {
                    test: /\.vue$/,
                    use: [{
                        loader: "vue-loader"
                    }],
                },
                {
                    test: /\.styl$/,
                    use: [{
                        loader: 'vue-style-loader!css-loader!auto-prefixer-loader!stylus-loader' //todo：： extract text(deploy env)
                    }]
                },
                {
                    // res loader ，二进制资源直接上传到七牛云，不使用loader
                }
            ],
        },
        externals: {
            "jquery": "jQuery",
            // "vue": "Vue",
            'react': 'React',
            'react-dom': 'ReactDOM',
            antd: 'antd'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Profile Edit',
                filename: 'profile.html',
                chunks: ['Profile'],
                template: path.resolve(__dirname, './src/template/base.html')
            })
        ],

        devServer: {
            contentBase: path.join(__dirname, "build"),
            setup(app) {
                app.set('views', path.join(__dirname, 'src', 'pages'));
                app.set('view engine', 'ejs');

                app.get('/pages/:page', function (req, res) {
                    res.render(req.params.page, {});
                });
            },
        },
    };
};
