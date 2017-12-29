console.log(7 / 0) // Infinity

console.log("10" / 2) // 5
console.log('3' + 2) // 32 <- concatena
console.log('3' - 2) // 1
const a = 7 / 0
console.log(a === Infinity) // true

console.log("Show!" * 2) // NaN
const b = "Show!" * 2
console.log(b === NaN) // false

/**
 * Segue o IEEE, essa espesificação é muito mais rápida 
 * do que a do valor preciso no exemplo 0.8
 */
console.log(0.1 + 0.7) // 0.7999999999999999

console.log( (10.345).toFixed(2) ) // 10.35
console.log( (10).toFixed(2) ) // 10.00
