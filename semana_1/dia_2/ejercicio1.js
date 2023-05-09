// Cargar un arr de manera aleatoria con 10 números enteros del -5 al 5. Imprimirlo en
// pantalla y computar cuál es el mayor elemento del vector.

let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let getMax = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}

let numbers = []

for (let i = 0; i < 9; i++) {
    numbers.push(randomInRange(-5, 5))
}

console.log("Array de 10 numeros enteros del -5 al 5");
console.log(numbers)
console.log("El mayor es: ", getMax(numbers))
console.log("El mayor es: ", Math.max(...numbers))