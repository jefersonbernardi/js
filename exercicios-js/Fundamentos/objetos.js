const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 45000
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaços
console.log(prod1)


const prod2 = {
    nome: "Camisa",
    preço: 79.90,
    obj1: {   //obj dentro de um obj
        Nome: 'Camisinha',
        valor: 1.50
    }
}


console.log(prod2)
