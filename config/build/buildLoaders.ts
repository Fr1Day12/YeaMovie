import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
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

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

  const sccLoader = {
    test: /\.s[ac]ss$/i,
    use: [styleLoader, cssLoaderWithModules, "sass-loader"],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [styleLoader, "css-loader"],
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: false,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    // rules: [
    //   {
    //     test: /\.ts$/,
    //     loader: "ts-loader",
    //     options: {
    //       logLevel: "info",
    //     },
    //   },
    // ],
  };

  return [svgrLoader, assetLoader, sccLoader, cssLoader, tsLoader];
}
