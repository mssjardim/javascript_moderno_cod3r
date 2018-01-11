const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar
falar() // undefined // conflito entre paradigmas: fincional e Orientaçao a Objetivo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia!

const falar2 = pessoa.falar
falar2() // undefined