let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // true <- uma forma de transformar algo em booleano

/**
 * Todos os numeros diferentes de 0 sao verdadeiros (true)
 */
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

/**
 * Valores que convertem para falso (false)
 */
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

/**
 * Para finalizar
 */
console.log(!!('' || 0 || null || ' ')) // true

console.log(('' || 0 || 'epa')) // epa <- retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // Desconhecido

nome = 'Marco'
console.log(nome || 'Desconhecido') // Marco