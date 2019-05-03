 const pessoa = {
     saudacao: 'bom dia',
     falar(){
         console.log(this.saudacao)
   //se retirar o this, não irá funcionar a function
        }
 }
 pessoa.falar()
 console.log('////')
const falar = pessoa.falar
falar()

console.log('/////')

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 