console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)        // false
    console.log(this === module.exports) // false
    console.log(this === global)         // true
}

const logThis2 = () => {
    console.log('Dentro de uma função...')
    console.log(this === exports)        // true
    console.log(this === module.exports) // true
    console.log(this === global)         // false
}

logThis()
logThis2()