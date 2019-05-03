function Carro(velocidadeMaxima = 200, Delta = 5) {
    //atributo privado
    let velocidadeAtual = 0
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + Delta <= velocidadeMaxima) {
            velocidadeAtual += Delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico dentro da function carro
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log('////////')

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log('//////')

ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())