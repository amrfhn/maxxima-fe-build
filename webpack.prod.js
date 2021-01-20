const path =                        require("path")
const common =                      require("./webpack.common")
const merge =                       require("webpack-merge")
const MiniCssExtractPlugin =        require("mini-css-extract-plugin")
const { CleanWebpackPlugin } =      require("clean-webpack-plugin") // only need in prod cuz dev is using in-memory server
const CssUrlRelativePlugin =        require("css-url-relative-plugin")

module.exports = merge(common, {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'assets/js/[name].js',
        // publicPath: '~/Assets/' // comment this out when building for Firebase
    },
    module: {
        rules: [
            // {
            //     // handle the HTML files
            //     test: /.html$/,
            //     use: ["html-loader"]
            // },
            {
                test: /\.twig$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [':src']
                        }
                    },
                    {
                        loader: 'twig-html-loader',
                        options: {
                            namespaces: {
                                '@': path.resolve(__dirname, "src")
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/videos"
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                exclude: /fonts/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/img"
                    }
                }
            },
            {
                test: /\.(svg|eot|otf|ttf|woff|woff2)$/,
                exclude: [/img/, /img\/icons/],
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/fonts"
                    }
                }
            },
            {
                test: [/.js$/],
                exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env'
                            ]
                        ]
                    }
                }
            },
            {
                test: /.(sa|sc|c)ss$/,
                use: [
                    // Transform css and extract into separate single bundle
                    // Required to generate the file
                    { loader: MiniCssExtractPlugin.loader },

                    // Handles url() and @imports
                    { 
                        loader: "css-loader",
                        // options: { url: false }
                    },

                    // apply postcss transforms like autoprefixer and minify
                    { loader: "postcss-loader" },

                    "resolve-url-loader",
                    
                    // transform SASS to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/css/bundle.css"
        }),
        new CssUrlRelativePlugin(),
    ]
})