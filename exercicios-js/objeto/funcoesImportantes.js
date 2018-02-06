const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
/* nome: Rebeca
idade: 2
peso: 13 */

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
/* nome: Rebeca
idade: 2
peso: 13 */

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2019

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ] -> se o enumerable estiver false não mostra a propriedade

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj) // { a: 4, b: 2, c: 3 }

Object.freeze(obj)
obj.c = 1234
console.log(obj) // { a: 4, b: 2, c: 3 }