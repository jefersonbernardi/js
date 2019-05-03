function teste(par) {

    while (par < 5) {
        console.log(par + " Mais")
        par++
    }
}

teste(-2)
////////////////////////////////////////////////////////////
console.log('//////////Separador/////////////////')


function teste2random(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao

while (opcao != -1) {
    opcao = teste2random(-1, 5)
    console.log(`Opção Escolhida foi ${opcao}. `)
}
console.log('Até a Próxima')