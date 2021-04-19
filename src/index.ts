import type { Compiler } from 'webpack'
import * as log from './loggers'

export interface Options {
    patterns: RegExp[]
    enableLog?: boolean
}

export default class RemoveAssetsWebpackPlugin {

    constructor(private readonly config: Options) {
    }

    public apply(compiler: Compiler) {
        compiler.hooks.shouldEmit.tap('RemoveAssetsWebpackPlugin', (compilation) => {
            this.logStart();

            AssetsIterator:
            for (const filePath of Object.keys(compilation.assets)) {
                for (const pattern of this.config.patterns) {
                    if (pattern.test(filePath)) {
                        if (this.config.enableLog) {
                            log.asset(filePath)
                        }
                        delete compilation.assets[filePath];
                        continue AssetsIterator;
                    }
                }
            }

            this.logEnd();
            return true;
        });
    }

    private logStart() {
        if (this.config.enableLog) {
            log.line();
            log.text('RemoveAssetsWebpackPlugin');
            log.line();
            log.underlined('Patterns');
            this.config.patterns.forEach(log.pattern)
            log.blankLine();
            log.underlined('Patterns');
        }
    }

    private logEnd() {
        if (this.config.enableLog) {
            log.line();
        }
    }
}
