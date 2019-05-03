const sequencia = {
    _valor: 1, //convencao é acessada so internamente dentro do obj
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor){
        this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
// proxima adicao de valor nao ira funcionar por causa
// que o valor anterior é maior que o atual
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)