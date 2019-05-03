function teste2random(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = teste2random(-1, 5)
    console.log(`Opção Escolhida foi ${opcao}. `)
} while (opcao != -1)
console.log('Até a Próxima')