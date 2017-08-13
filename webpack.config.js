const webpack = require('webpack');
const path = require('path');
module.exports = {
    // options affecting normal modules
    module: {
        // array of automatically applied loaders
        loaders: [
            {
                // list of loaders to apply
                loader: "babel-loader",
                // dont meet this condition
                exclude: [
                    /(node_modules)/,
                ],
                //used to provide query parameters to loader.
                //similar to ?presets=es2015,react&plugins=transform-object-rest-spread
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    // adding plugins to add functionality typically related to bundles
    plugins: [
        // for supporting hmr
        new webpack.HotModuleReplacementPlugin(),
        // to disable exiting webpack process when error arise
        new webpack.NoErrorsPlugin()
    ],
    /*
        The entry point for the bundle.
        If you pass a string: The string is resolved to a module which is loaded upon startup.
        If you pass an array: All modules are loaded upon startup. The last one is exported.
    */
    entry: {
        "index": [
            // transform async/generator functions
            'babel-regenerator-runtime',
            // as evident, for hmr
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            // main source file and our required entry point
            './src/main'
        ]
    },
    /*
        Options affecting the output of the compilation. 
        tells Webpack how to write the compiled files to disk. 
        Note, that while there can be multiple entry points, only one output configuration is specified.
    */
    output: {
        // specifies the location of output file on disk
        path: path.resolve(__dirname, "public"),
        // specifies the public URL address of the output files when referenced in a browser
        publicPath: "/assets",
        // specifies the name of individual files
        filename: "[name].bundle.js"
    },
    // specifies the optiosn affecting the resolving of modules
    resolve: {
        // An array of extensions that should be used to resolve modules
        extensions: ['', '.js', '.jsx'],
    },
    // used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI.
    devServer: { inline: true },
    // developer tool to enhance debugging
    devtool: 'source-map'
};
