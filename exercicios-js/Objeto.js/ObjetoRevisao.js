const produto = new Object
produto.nome ='cadeira'
produto.valor = 2500
produto.MarcadoProduto = 'Generica'
console.log(produto)

for(let atributo in produto){
    console.log(`${atributo} = ${produto[atributo]}`)}

console.log(produto.lenght)