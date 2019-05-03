const carro = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lapis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50}'
]
// retornar  um array apenas com os precos//
const paraObjeto = json => JSON.parse(json)
console.log('')

let resultadoObj = carro.map(paraObjeto)
console.log(resultadoObj)

let apenasPreco = produto => produto.Preco
console.log(' ')
let resultado = carro.map(paraObjeto).map(apenasPreco)
console.log(resultado)