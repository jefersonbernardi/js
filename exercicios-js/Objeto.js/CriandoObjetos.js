//Primeira forma
const obj = {}

//Segunda forma
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

/////
function Produto(nome, preco, desc) {
    this.nome = nome
    this.GetPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 9.77, 0.10)
const p2 = new Produto('Lapis', 2.50, 0.20)
console.log(p1.GetPrecoComDesconto(), p2.GetPrecoComDesconto())

//Funcao Factory
function criarFuncionarios(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f15 = criarFuncionarios('Joao', 7000, 4)
const f16 = criarFuncionarios('Maria', 5000, 10)

console.log(f15.getSalario())
console.log(f16.getSalario())

// Object.Create
console.log('Object.Create')

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

////Uma funcao q retorna um obj
const fromJSON = JSON.parse('{"info":  "Sou um JSON"}')
console.log(fromJSON.info)
