import readline from  "readline-sync"

// let age = readline.question("\nEnter your age :")
// let name = readline.question(`\nWhat is your Name :`)
// console.log(`\n Your name is ${name} and the age is ${age}`)

// let email=readline.question("Enter your email. :")
// let age=readline.questionInt(`ENter your age :`)
// console.log(age)

import chalk from 'chalk';

console.log(chalk.redBright('Hello world!'));
console.log(chalk.yellowBright.bgRed.bold('Hello world!'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
