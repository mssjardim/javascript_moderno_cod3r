function tratarErroELancar(erro) {
    // throw new Error('lançando o erro')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw erro 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErroELancar(erro)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Leonardo' }
imprimirNomeGritado(obj)