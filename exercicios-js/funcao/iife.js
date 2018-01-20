// IIFE -> Immediately Invoked Function Expression
// Foge do escopo global,
// let, var, const existem apenas de uma função IIFE
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangende!')
})()