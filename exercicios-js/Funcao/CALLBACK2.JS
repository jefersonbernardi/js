console.log('///exemplo 1 Sem CallBack')
const notas = [2, 5, 1, 3, 7.7, 7, 6.5, 7.2, 9.0]
let notasBaixas1 = []

for (let i in notas) {

    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//////
console.log('//////exemplo 2 CallBack')
notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7
})

console.log(notasBaixas2)
console.log('/////exemplo  3 CallBack')
const notasBaixas3 = notas.filter(nota => nota < 7
    
)
console.log(notasBaixas3)