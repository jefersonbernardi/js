//É o escopo criado quando
//uma funcao e declarada
//Esse escopo permite a funcao
//acessar e manipular variaveis
// externas à funcao

//Contexto em acao
const x = 'Global'

function fora(){
    const x ='Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
console.log(fora())
console.log(fora()())
