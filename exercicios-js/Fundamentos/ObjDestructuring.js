// introduzido na versao 2015
//tira alguma coisa da estrutura

const pessoa = {
    nome: 'ANA',
    idade: 15,
    altura: 1.80,
    endereco: {
        logradouro: 'Rua mario quintana',
        numero: 156
    }
}

const {
    nome,
    idade
} = pessoa
console.log(nome, idade)


const {
    nome: n,
    idade: i
} = pessoa
console.log(n,i)

const {sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome, bemHumarada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)
