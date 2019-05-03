let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
//sim verdadeiro  (!! duas negações = verdadeiro)
console.log(!isAtivo)
//nao verdadeiro (! uma negação = falso)

console.log(`Os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!" ") //espaco vazio no meio, ou algum texto da true
console.log(!!Infinity)
console.log(isAtivo = true)

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') //string vazia, sem texto e nem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' '))
// || = ou


let nome = ''
console.log(nome || "Desconhecido")
//primeiro nome deu falso, entao emprimiu Desconhecido
