const ferrari = {
    modelo: 'f40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)