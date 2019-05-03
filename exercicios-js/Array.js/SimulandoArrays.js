const teste = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}

Object.defineProperty(teste, 'toString', {
    value: function (){return Object.values(this)},
    enumerable: false
})

console.log(teste[0])


const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(teste.toString(), meuArray)