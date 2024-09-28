const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    { name: 'nome', message: 'Qual o seu nome?' },
    { name: 'idade', message: 'Qual a sua idade?' },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      console.log(chalk.red('Por favor, preencha o seu nome.'));
      return;
    }
    
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`;
    console.log(chalk.bgYellow.black(response));
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.log('O terminal não suporta interação com o console');
    } else {
      console.log('Erro ao interagir com o console:', err.message);
    }
  });
