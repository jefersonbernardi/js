function tratarErroELancar(erro) {
    //throw new Error('...')
    throw 10
}

function imprimir(obj) {
    try {
        console.log(obj.nome.toUppercase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}


const obj = {
    nome: 'joao'
}
imprimir(obj)