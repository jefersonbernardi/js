function Pessoa(){
    this.idade =0
    const self = this
//criar a const self = this
// pode substituir o bind(this)

    setInterval(function(){
    self.idade++
//this ou self
    console.log(self.idade)
    //          this ou self
    }/*.bind(this)*/, 1000)
    //sem o bind
// o codigo nao funciona
//bind serve para referencia
// Pessoa
}

new Pessoa

