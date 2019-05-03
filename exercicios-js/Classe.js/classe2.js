class Avo {
    constructor(sobrenome, profissao = 'Engenheiro') {
        this.sobrenome = sobrenome
        this.profissao = profissao
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Arquiteto') {
        super(sobrenome)
        this.profissao = profissao
}
}
class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)