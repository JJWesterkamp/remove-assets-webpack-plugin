import chalk from 'chalk'

export function logResult(patterns: RegExp[], matches: [string, RegExp][]): void {
    line()
    text('RemoveAssetsWebpackPlugin')
    line()
    underlined('Patterns')
    patterns.forEach(pattern)
    blankLine()
    underlined('Removed assets')
    assets(matches)
    line()
}

function line(): void {
     console.log(chalk.bold('-'.repeat(100)))
}

function text(text: string): void {
     console.log(chalk.bold(text))
}

function underlined(text: string): void {
     console.log(chalk.bold.underline(text))
}

function pattern(regex: RegExp): void {
     console.log(`  ` + chalk.cyan.bold(regex))
}

function assets(matches: [string, RegExp][]): void {
    const longestPathLength = matches.reduce((max: number, [path]) => Math.max(max, path.length), 0)
    for (const [path, regex] of matches) {
        console.log(`  ` + chalk.green.bold(path.padStart(longestPathLength)) + '   matching   ' + chalk.cyan.bold(regex))
    }
}

function blankLine(): void {
    console.log('')
}