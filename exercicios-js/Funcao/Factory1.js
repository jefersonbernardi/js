// funcao q retorna um obj

const prod1 = {
    nome: 'Vada',
    preco: 140,
    
}
const prod2 = {
    nome: 'Fada',
    preco: 1240,   
}
//Fabricar um novo obj
//atraves de funcao factory
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
