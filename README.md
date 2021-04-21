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

When `enableLog` is set to `true`, the plugin will output the used patterns and removed matching assets to the console like in the following image.
This can be handy for debugging your webpack configuration:

<img width="723" alt="Screenshot 2021-04-21 at 13 07 39" src="https://user-images.githubusercontent.com/12270687/115546240-1032cb80-a2a5-11eb-8c62-5b627ed8bc04.png">

## License

The MIT License (MIT). See [license file] for more information.

[license file]: https://github.com/JJWesterkamp/remove-assets-webpack-plugin/blob/master/LICENSE
