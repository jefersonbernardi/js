const notas = [5.5,6.6,7,7.8,8.9,10]

//ForIn percorre pelos indices e nao pelo valor

for(let i in notas){
    console.log(`Incide: ${i} Valor de nota: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    peso: 30,
    altura: 1.80
}

for(let atributo in pessoa){
    console.log(`Atributo ${atributo} = ${pessoa[atributo]}`)
}
