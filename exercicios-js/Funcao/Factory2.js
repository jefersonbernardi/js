function criarProduto(nome,preco){
    return {
        nome: nome,
        preco: preco,
        desconto: preco*0.10
    }
}

console.log(criarProduto('Notebook', 2040))
console.log(criarProduto('Jeba', 40))
