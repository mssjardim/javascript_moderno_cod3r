//              01234
const escola = "Cod3r"

console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // retorna um valor vazio ""
console.log(escola.charCodeAt(3)) // 51 <- codigo da tabela ASCII (Unicode)
console.log(escola.indexOf('3')) // 3 <- indice 3 na palavra Cod3r
console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // Cod <- do indice 0 até o indice 3
console.log(escola.length) // 5

console.log('Escola '.concat(escola).concat("! ").concat(1))

console.log(escola.replace(3, 'e')) // pega numero 3 e substitui pelo e

console.log(escola.replace(/\d/, 'e')) // Coder
console.log(escola.replace(/\w/, 'e')) // substitui a primeira letra ou numero encontrado pela letra e
console.log(escola.replace(/\w/g, 'e')) // substitui letras e numeros pela letra e

console.log('Ana,Maria,Pedro'.split(',')) // [ 'Ana', 'Maria', 'Pedro' ]
console.log('Ana,Maria,Pedro'.split(/,/)) // [ 'Ana', 'Maria', 'Pedro' ]
console.log('Ana,Maria,Pedro'.split(/./)) // [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]
