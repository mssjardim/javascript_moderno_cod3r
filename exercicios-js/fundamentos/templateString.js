const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

const template = `
    Ola
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

//    nome da funcao   parametro    bloco da funcao
const up             = texto     => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`) // Ei... CUIDADO!