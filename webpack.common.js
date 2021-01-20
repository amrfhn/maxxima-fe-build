const path =                    require("path")
const fs =                      require("fs")
const HtmlWebpackPlugin =       require("html-webpack-plugin")
const webpack =                 require("webpack");
const SVGSpritemapPlugin =      require("svg-spritemap-webpack-plugin");
const CopyPlugin =              require("copy-webpack-plugin");

const pages = fs.readdirSync(path.resolve(__dirname, "src"))
                .filter(fileName => fileName.endsWith(".twig"))

/** @type {webpack.Configuration} */
module.exports = {
    entry: "./src/js/index.js",
    resolve: {
        extensions: [".js", ".scss", ".css"],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
            'vue$': 'vue/dist/vue.esm.js' 
        }
    },
    plugins: [
        ...pages.map(page => new HtmlWebpackPlugin({
            template: "src/" + page,
            filename: page.replace(".twig", ".html"),
            inject: true,
            minify: false
        })),
        new SVGSpritemapPlugin("src/assets/icons/**/*.svg", {
            output: {
                filename: "assets/icons/icons.svg",
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery',
            "window.jQuery": "jquery",
        }),
        new CopyPlugin([
            { from: 'src/mocks', to: 'mocks' },
            { from: 'src/assets/favicon', to: 'assets/favicon' },
        ])
    ],
    optimization: {
        splitChunks: {
            chunks: 'async'
        }
    },
    externals: {
        jquery: 'jQuery'
    }
}