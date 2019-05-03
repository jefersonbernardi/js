////Estratégia de gerar parametros padrao////

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(2, 3), soma1(2, 2, 3))

//Segundo metodo//
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}
console.log(soma2(2,2,4))
console.log(soma2())

////Padrao ecma script 2015
// se nao colocar um valor, sera atribuido automatico o valor 1
function soma3(a=1, b=1,c=1){
     return a+b+c
}
console.log('soma3')
console.log(soma3(3,5,6))