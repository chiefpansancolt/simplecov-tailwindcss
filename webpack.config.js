const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  return {
    entry: {
      index: path.resolve(__dirname, "dist", "app.js"),
    },
    output: {
      path: path.resolve(__dirname, "public"),
    filename: "application.js",
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "application.css" }),
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    require("tailwindcss")("./tailwind.config.js"),
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  fiber: require("fibers"),
                  includePaths: ["./node_modules"],
                },
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                ['@babel/plugin-proposal-class-properties', {'loose': true}],
              ]
            },
          },
        },
      ]
    },
  }
}