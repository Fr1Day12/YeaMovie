import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
export function buildPlagins(_a) {
    var mode = _a.mode, paths = _a.paths, analyzer = _a.analyzer, platform = _a.platform;
    var isDev = mode === "development";
    var isProd = mode === "production";
    var plagins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            __PLATFOMR__: platform,
        }),
        new DotenvWebpackPlugin(),
    ];
    if (isDev) {
        plagins.push(new ForkTsCheckerWebpackPlugin());
        plagins.push(new ReactRefreshWebpackPlugin());
    }
    if (isProd) {
        plagins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }));
    }
    if (analyzer) {
        plagins.push(new BundleAnalyzerPlugin());
    }
    return plagins;
}
