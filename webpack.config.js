const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    }
}
;