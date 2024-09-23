import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
export function buildLoaders(options) {
    var isDev = options.mode === "development";
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    var svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
            },
        },
    };
    var styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;
    var sccLoader = {
        test: /\.s[ac]ss$/i,
        use: [styleLoader, cssLoaderWithModules, "sass-loader"],
    };
    var cssLoader = {
        test: /\.css$/i,
        use: [styleLoader, "css-loader"],
    };
    var tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: false,
                    getCustomTransformers: function () { return ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }); },
                },
            },
        ],
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    logLevel: "info",
                },
            },
        ],
    };
    return [svgrLoader, assetLoader, sccLoader, cssLoader, tsLoader];
}
