const fabricantes = ['mercedes', 'audi', 'ford', 'bmw']

imprimir = (nome,indice) =>{
    console.log(` ${indice +1   }. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((a) =>{
    console.log(a)
})


