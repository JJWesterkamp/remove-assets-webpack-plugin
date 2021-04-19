# @jjwesterkamp/remove-assets-wepback-plugin

A simple webpack plugin to remove assets from compilations.


## Installation

```
$ npm install --save-dev @jjwesterkamp/remove-assets-webpack-plugins
```

## Usage

Add a new plugin instance to your webpack configuration:

```javascript
const RemoveAssetsWebpackPlugin = require('@jjwesterkamp/remove-assets-webpack-plugins');

module.exports = {
    plugins: [
        new RemoveAssetsWebpackPlugin({

            // enter RegExp patterns here...
            patterns: [
                // For instance, to remove .js and .js.map output from CSS
                // entries (matches output files within /css/, ending with
                // .js or .js.map)
                /^css\/.+\.js(\.map)?$/,
            ],

            // optionally enable console output of the used patterns and
            // matched assets that will be removed from the compilation.
            enablelog: true
        })
    ]
}
```