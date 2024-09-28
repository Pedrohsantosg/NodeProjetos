//exclua a pasta/diretório para que o algoritmo entre em funcionamento

const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe')
  fs.mkdirSync('minhapasta')
}else{
    console.log('Existe')
}



