// index.js
import chalk from 'chalk';

const nota = 8;
const nota2 = 6;

if (nota2 >= 7) {
  console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
  console.log(chalk.red("Você precisa fazer a prova final!"));
}
// index.js
// (async () => {
//   const chalk = await import('chalk');
//   const nota = 8;

//   if (nota >= 7) {
//     console.log(chalk.default.green.bold("Parabéns, você passou!"));
//   } else {
//     console.log(chalk.default.bgRed.black("Você precisa fazer a prova final!"));
//   }
// })();
