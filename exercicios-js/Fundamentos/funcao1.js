//funcao sem retorno no JS

function imprimirSoma(a, b) {
    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(5, 7)
imprimirSoma(5, 7, 8, 9, 10, 11) // so ira pegar os dois primeiros.

///////
function soma(a, b = 3) {

    return a + b
}
console.log(soma(2))
console.log(soma())