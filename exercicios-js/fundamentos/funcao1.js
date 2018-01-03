// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(1, 2) // 3
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // 5
imprimirSoma() // NaN


// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(soma(2, 3))) // 5
console.log(soma(2)) // 2
console.log(soma()) // NaN
