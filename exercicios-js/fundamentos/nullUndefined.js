let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor)

// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // undefined
// console.log(produto.preco.a) // Erro

produto.preco = 3.50
console.log(produto) // undefined

produto.preco = undefined
console.log(!!produto.preco) // false
// delete produto.preco
console.log(produto) // { preco: undefined }