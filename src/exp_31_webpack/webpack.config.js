const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/js/main'),
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js'
    }
};