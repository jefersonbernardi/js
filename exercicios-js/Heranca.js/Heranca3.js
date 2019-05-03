const pai = {
    nome: 'pedro',
    corCabelo: 'verde'
}

const filha1 = Object.create(pai)
filha1.nome = 'ana'
/// ja localiza o atributo no prototipo pai
console.log(filha1.corCabelo)
const filha2 = Object.create(pai, {
    nome: {value: 'Bia',
    writable: false,
    enumerable: true,
}})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo : ${filha2.corCabelo}`)

console.log('/////////////')
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/////nome pertence ao obj, porem cor do cabelo vem por herança
for (let key in filha2){
    filha2.hasOwnProperty(key) ?//(O Atributo pertence ao OBJ??)
    console.log(key) : console.log(`Por herança : ${key}`)
}