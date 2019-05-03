//Object.preventExtensions
console.log('Object.preventExtensions(produto)')
const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 199,
    tag: 'promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'borracha branca'
delete produto.tag
console.log(produto)
// nesse metodo é possivel alterar o valor, mas proibido adicionar
// um novo atributo
console.log('//////')
//Object.seal
// Selar o obj (nao consegue adc nem excluir atributo, mas modifica os valores)
console.log('Objetct.seal(pessoa1)')
const pessoa1 = {nome: 'Joao', idade: 30}

Object.seal(pessoa1)//selar pessoa
console.log('Selado: ', Object.isSealed(pessoa1))// true = está selado
pessoa1.sobrenome = 'silva' // nao funcionarar porque n tem atributo sobrenome
pessoa1.idade = 30 //consegue alterar porque tem idade como atributo

//projeto.freeze
//NAO CONSEGUE MODIFICAR NADA. TOTALMENTE CONSTANTE
console.log('Object.freeze(pessoa1)')

Object.freeze(pessoa1)
console.log(pessoa1)