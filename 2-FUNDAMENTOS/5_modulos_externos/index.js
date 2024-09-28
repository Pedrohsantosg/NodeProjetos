// --nome=Pedro --idade=23
const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

console.log(args);

const nome = args["nome"];
const idade = args["idade"];

console.log(`Meu nome: ${nome} e minha idade: ${idade}`);