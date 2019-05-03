const valores = [7.1, 8.9, 9.2, 4.0]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)


valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
//retira do array o ultimo valor
delete valores[3]
console.log(valores)

console.log(typeof valores)
