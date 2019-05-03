var valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

console.log('////exemplo 2///')

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()