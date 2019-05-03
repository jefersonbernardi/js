const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
//numero é inteiro???//

const avaliacao = 2.89
console.log(Number.isInteger(avaliacao))

const total = peso1 * peso2 + avaliacao
const media = peso1+peso2+avaliacao%2
console.log(total)
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString(2))// binário
console.log(typeof(media))
console.log(typeof(Number))

valor = '5'
console.log(valor)