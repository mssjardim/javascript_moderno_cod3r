const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

// Desafio: A mulher chinesa com menor salário
const getChineses = funcionario => funcionario.pais === "China";
const getMulheres = funcionario => funcionario.genero === "F";
const getMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data;

    const resultado = funcionarios
        .filter(getChineses)
        .filter(getMulheres)
        .reduce(getMenorSalario);

    console.log(resultado);
});
