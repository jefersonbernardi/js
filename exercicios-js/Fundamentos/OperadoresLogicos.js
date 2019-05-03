// || = ou
// && = e
// ?? = 
//
//
//
//
// V -> V = V
// V -> F = F
// F -> ? = F
//

function compra(trab1, trab2) {
    const compraSorvete = trab1 || trab2
    const compraTv = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2)
    const manterSaudavel = !compraSorvete
    const compraTv32 = trab1 != trab2
    return {
        compraSorvete,
        compraTv,
        compraTv32,
        manterSaudavel
    }
}
console.log(compra(true, true))
console.log(compra(true, false))
