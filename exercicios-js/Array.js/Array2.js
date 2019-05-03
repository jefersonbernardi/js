const pilotos = ['Massa', 'Alonso', 'Raikkonen', 'Vettel']
pilotos.pop() // retira o ultimo elemento do array
pilotos.push('Verstappen')// ADC um elemento

pilotos.shift()//Removo o primeiro elemento da lista
pilotos.unshift('Hamilton')//ADC um elemento no primeiro indice do array
console.log(pilotos)

//adicionar e escolher o elemento
//adc elemento 2, excluir 0 elementos
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//cria novo array a partir
// do indice >>>>>>>>>>>>>>>>>>>>>>[2]
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)// A partir do 1 até o 4
//mas nao pega o indice 4
console.log(algunsPilotos2)