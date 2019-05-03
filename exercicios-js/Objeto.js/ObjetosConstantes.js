//pessoa aponta endereco de memoria
const pessoa = {
    nome: 'Joao'
}

pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa vai receber um novo obj
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

// freeze congela o dado anterior
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)