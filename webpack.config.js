const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve("./src"),
    entry: {
        vendor: [ "babel-polyfill", "react", "react-dom", "react-router", "react-tap-event-plugin", "material-ui" ],
        app: [ "./index.jsx", "./res/index.less" ]
    },
    output: {
        path: path.resolve("./public/assets"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js",
    },
    devServer: {

    },
    module: {
        loaders: [
             {
                 test: /\.js|jsx$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: "babel"
             },
             {
                 test: /\.less$/,
                 loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
             }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor/bundle.js",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("./[name]/res/bundle.css")
    ]
};
