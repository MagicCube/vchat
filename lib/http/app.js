import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

import api from "./api";

const app = express();
app.use(express.static("public"));

const webpackConf = require("../../webpack.config");
const compiler = webpack(webpackConf);
const webpackDevServerConf = Object.assign(
    { publicPath: webpackConf.output.publicPath },
    webpackConf.devServer
);
app.use(webpackDevMiddleware(compiler, webpackDevServerConf));
app.use("/api", api);

export default app;
