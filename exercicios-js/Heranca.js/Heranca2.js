///Criando cadeia de propotipo
const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 100,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h  de ${this.velMax}`
    }
}
const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing
}
const volvo = {
    modelo: 'p40',
    velMax: 200,
    status() {
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())