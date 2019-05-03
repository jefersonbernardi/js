const escola = 'cod3r'
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //inicia no 0 e vai ate o 3

console.log('Escola '.concat(escola).concat('!'))
//concatenar, acrescentar

console.log(escola.replace(3, 'e'))
//substitui letra.
console.log(escola.replace(/\d/, 'e'))
//substitui todos os numeros por letra e'))

console.log('ana, pedro, joao'.split(','))