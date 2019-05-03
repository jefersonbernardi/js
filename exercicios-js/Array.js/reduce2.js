const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista:false},
    {nome: 'Pedro', nota: 5.3, bolsista:true},
    {nome: 'Carvalho', nota: 7.3, bolsista:true},
    {nome: 'Victor', nota: 6.3, bolsista:true},
]

//todos os alunos são bolsistas???
const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))



//Algum aluno é bolsista??
const algunsBolsistas = (resultado, bolsista)=> resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algunsBolsistas))

const bolsistas = a => a.bolsista == false
console.log(alunos.filter(bolsistas))