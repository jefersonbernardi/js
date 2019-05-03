const pessoa = {
    nome: 'Rebeca',
    idade : 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false,
    writable: false,
    value: '01,01,2015'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


////{ ECMA SCRIPT 2015}
console.log("ECMA 2015S CRIPT")
const desk = {a:1}
const desp = {b: 2}
const dest = {c: 3, a:4}
//ele pega o obj de destino "DESK" e contatena os outros obj neles...
const teste = Object.assign(desk, desp, dest)
console.log(teste)
/////////////// no caso dest tinha a:4 e substituiu o valor de a no desk

Object.freeze(teste)//congela todos os atributos de teste

