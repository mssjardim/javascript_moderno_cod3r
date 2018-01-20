function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

// vc pode criar um objeto
// a partir de uma função construtora
// a partir de uma Classe
// a partir de uma função Factory

// como o this fica variando,
// voce pode achar mais interessante
// criar um objeto a partir de uma função Factory