const teste = ['Aghata','Renan','Malva','Duda','Carlos']

teste.forEach(function(nome, indice, array){
    console.log( `${indice +1}) ${nome}`)
   // console.log(array)
})

teste.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

teste.forEach(exibirAprovados)
