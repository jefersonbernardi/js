function pessoa(nome) {
    this.nome = nome
    
       this.falar = function(){
            console.log(`Meu nome é : ${this.nome}`)
        }
    }

const p1 = new pessoa ('joao')
p1.falar()
console.log(p1.nome)
//pode retirar o this.nome
//mas... se retirar, nao tem
//como acessar o p1.nome