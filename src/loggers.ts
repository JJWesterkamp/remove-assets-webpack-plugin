import chalk from 'chalk'

export const line = () => console.log(chalk.bold('-'.repeat(100)))
export const text = (text: string) => console.log(chalk.bold(text))
export const underlined = (text: string) => console.log(chalk.bold.underline(text))
export const pattern = (pattern: RegExp) => console.log(`  ` + chalk.cyan.bold(`${pattern}`))
export const asset = (asset: string) => console.log(`  ` + chalk.green.bold(`${asset}`))
export const blankLine = () => console.log('')