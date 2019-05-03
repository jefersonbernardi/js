function MeuObojeto(){}
console.log(MeuObojeto.prototype)

const obj1 = new MeuObojeto
const obj2 = new MeuObojeto
console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObojeto.prototype === obj1.__proto__)//true

MeuObojeto.prototype.nome = 'Anonimo'
MeuObojeto.prototype.falar= function(){
    console.log(`Bom dia! Meu nome é: ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Renan'
obj2.falar()

const obj3 ={}
obj3.__proto__ = MeuObojeto.prototype
obj3.nome = 'Carvalho'
obj3.falar()

//  Resumindo essa loucura....

console.log((new MeuObojeto).__proto__ === MeuObojeto.prototype)//true
console.log(MeuObojeto.__proto__ === Function.prototype)//true
console.log(Function.prototype__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)
