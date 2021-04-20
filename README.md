# @jjwesterkamp/remove-assets-webpack-plugin

A simple webpack plugin to remove assets from compilations.


## Installation

```
$ npm install --save-dev @jjwesterkamp/remove-assets-webpack-plugin
```

## Usage

Add a new plugin instance to your webpack configuration:

```javascript
const RemoveAssetsWebpackPlugin = require('@jjwesterkamp/remove-assets-webpack-plugin');

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

## License

The MIT License (MIT). See [license file] for more information.

[license file]: https://github.com/JJWesterkamp/remove-assets-webpack-plugin/blob/master/LICENSE