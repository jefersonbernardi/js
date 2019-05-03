console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Giova')
console.log(aprovados)
console.log(aprovados[2])

reprovados = ['Renan', 'Carlos', 'Edu']
console.log(reprovados[0])
////////////////////////////////////////////////////////
console.log('////aprovados.push(abia) ADC NO ULTIMO SLOT UM ARRAY')
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados)
//////////////////////////////////////////////////////
console.log('////aprovador.sort()////COLOCA EM ORDEM ALFABETICA')
aprovados.sort()/// Coloca em ordem alfabetica

console.log(aprovados)
///////////////////////////////////////////////////////

testando = ['Juan', 'Rubia', 'Carla']
aprovados.splice(1,1, 'Carol', 'DUDA')//Remove e adiciona um indice
console.log(testando)
