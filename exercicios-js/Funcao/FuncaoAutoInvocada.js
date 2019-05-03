// Immediately Invoked Function
// usada pra fugir do escopo global
//tudo q criar dentro vira escopo locar
// e nao global do browser

(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()

