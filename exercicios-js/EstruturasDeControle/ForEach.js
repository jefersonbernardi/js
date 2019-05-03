let nomes = ['Ana','Pedro','Gustavo','Silvia','Juan','Margarida']

imprimir = (nome, indice)=>{
console.log(`${indice +1}. ${nome}.`)
}
// ForEach sempre imprime o nome e depois o indice
// inverter na function imprimir
nomes.forEach(imprimir)
