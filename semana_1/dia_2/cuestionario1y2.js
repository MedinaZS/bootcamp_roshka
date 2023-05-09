// 1. Escribir una función en JavaScript que calcule la versión que suma en la ecuación cuadrática
// (-b + sqrt(b^2 - 4ac))/2a
// Entrada: a, b, c Salida: raiz cuadrática (+)


let getPositiveQuadraticEquation = (a, b, c) => {
    let result = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a)
    return result
}
// Test
console.log(getPositiveQuadraticEquation(1, 5, 6))

// 2. Escribir una función en JavaScript que calcule la versión que resta en la ecuación cuadrática
// (-b - sqrt(b^2 - 4ac))/2a
// Entrada: a, b, c Salida: raiz cuadrática (‒)

let getNegativeQuadraticEquation = (a, b, c) => {
    let result = (-b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a)
    return result
}
// Test
console.log(getNegativeQuadraticEquation(1, 5, 6))