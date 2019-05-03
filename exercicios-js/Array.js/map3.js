Array.prototype.map2 = function (Callback) {
    const newArray = []
    for (let i = 0; i <= this.length; i++) {
        newArray.push(Callback(this[i], i, this))
    }
    return newArray
}


const carro = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lapis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50}'
]
// retornar  um array apenas com os precos//
const paraObjeto = json => JSON.parse(json)
console.log('')

let resultadoObj = carro.map2(paraObjeto)
console.log(resultadoObj)

let apenasPreco = produto => produto.Preco

console.log(' ')
let resultado = carro.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)