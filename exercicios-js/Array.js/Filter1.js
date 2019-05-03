const produtos = [{
        nome: 'Notebook',
        preco: 150,
        fragil: true
    },
    {
        nome: 'Ipad',
        preco: 2500,
        fragil: true
    },
    {
        nome: 'Aviao',
        preco: 10000,
        fragil: false
    },
    {
        nome: 'Copo de vidro',
        preco: 250,
        fragil: true
    }
]

console.log(produtos.filter(function(p){
    return p.preco >2000
}))
console.log('')

const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))