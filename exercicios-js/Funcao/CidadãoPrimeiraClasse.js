//funcao em Js é First-class Objetc (Citizens)
//Higher-Order-Function
// function de forma literal
function fun1() {}
// armazenar numa variavel
const fun2 = function () {} //anonima

//armazenar em um array
const array = [function teste(a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 5))

////colocar em um obj
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// passar uma funcao como parametro
function run(fun) {
    fun()
}
run(function () {
    console.log('Executanto...')
})

// um funcao pode retornar uma funcao criada dentro dela
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const exemplo = soma(2, 4)
exemplo(4)