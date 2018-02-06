// pessoa -> 123 (endereço de memoria) -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa) // { nome: 'Pedro' }

// pessoa -> 456 (endereço de memoria) -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa) // { nome: 'Pedro' }