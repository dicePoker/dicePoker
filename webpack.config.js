const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        port: process.env.PORT || 8080,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./www/index.html"
        })
    ]
};