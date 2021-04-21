import type { Compiler } from 'webpack'
import * as log from './loggers'

export interface Options {
    patterns: RegExp[]
    enableLog?: boolean
}

export default class RemoveAssetsWebpackPlugin {
    constructor(private readonly config: Options) {
    }

    public apply(compiler: Compiler): void {
        compiler.hooks.shouldEmit.tap('RemoveAssetsWebpackPlugin', (compilation) => {
            const matches: [string, RegExp][] = []

            AssetsIterator:
            for (const filePath of Object.keys(compilation.assets)) {
                for (const pattern of this.config.patterns) {
                    if (pattern.test(filePath)) {
                        matches.push([filePath, pattern])
                        delete compilation.assets[filePath]
                        continue AssetsIterator
                    }
                }
            }

            if (this.config.enableLog) {
                log.logResult(this.config.patterns, matches)
            }

            return true
        })
    }
}
