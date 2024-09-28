//nome = Pedro 
console.log(process.argv)

const args = process.argv.slice(2)//node script.js arg1[0,1,2]

console.log(args)

const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]
console.log(`Meu nome é ${nome} e tenho ${idade} anos!`)

