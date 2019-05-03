const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista:false},
    {nome: 'Pedro', nota: 5.3, bolsista:false},
    {nome: 'Carvalho', nota: 7.3, bolsista:true},
    {nome: 'Victor', nota: 6.3, bolsista:true},
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
}, 5.8)//valor inicial no final da callback

console.log(resultado, 'Ultima Linha')

