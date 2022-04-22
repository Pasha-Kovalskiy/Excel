const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = (extension) => isDev ? `bundle.${extension}` : `bundle.[hash].${extension}`;

const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        },
    ];

    if (isDev) {
        loaders.push({
            loader: "eslint-loader",
            options: {},
        });
    }

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: ["@babel/polyfill", "./index.js"],
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@core": path.resolve(__dirname, "src/core"),
        },
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
        port: 8000,
        hot: isDev,
        liveReload: isDev,
        open: isDev,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename("css"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
        ],
    },
};
