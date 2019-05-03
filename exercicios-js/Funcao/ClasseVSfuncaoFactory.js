class pessoa {
    constructor(nome, idade) {
        this.nome = nome
    }

        falar(){
            console.log(`Meu nome é : ${this.nome}`)
        }
    }

const p1 = new pessoa ('joao')
p1.falar()

////////////////////////////////////////////////
// Com array function nao precisa colocar this.nome
// no browse é possivel acessar o nome
// ja no metodo de cima, no browse: nome fica undefined
console.log('///metodo 2: ////')
const criarPessoa = nome=>{
    return{
        falar: ()=> console.log(`Meu nome é : ${nome}`)
    }
}

const p2= criarPessoa('Joao')
p2.falar()
