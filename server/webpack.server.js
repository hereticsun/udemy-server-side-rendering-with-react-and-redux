const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const config = {
    // Inform Webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell Webpack the root file of our 
    // server application
    entry: './src/index.js',

    // Tell Webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);
