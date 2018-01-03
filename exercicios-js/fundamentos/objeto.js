const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1["atrib com espaco"] = 'pode'
prod1['pode'] = false

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    'asd a' : '',
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
prod2.quantidade = 1

console.log(prod2)
