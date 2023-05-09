// Cargar un array de manera aleatoria con 100 números enteros del -30 al 30. Imprimirlo en
// pantalla y computar cuál es el elemento que más veces se repite, y cuáles son los números
// que no están presentes (si es que hay alguno).

let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let numbers = []
let maxOccurrenceNumber = 0
let missingNumbers = []
let maxOccurrenceCount = 0

// Get the numbers
for (let i = 0; i < 100; i++) {
    numbers.push(randomInRange(-30, 30))
}

// Obtener cuantas veces se repite el numero en el array
let getOccurrence = (arr, value) => {
    let count = 0
    arr.forEach(item => { if (item === value) count++ }) 
    return count
}

for (let i = -30; i <= 30; i++) { //Recorrer el rango de numeros
    let actualCount = getOccurrence(numbers, i) // Contar cuantas ocurrencias hay de ese numero
    
    if (actualCount === 0) {
        missingNumbers.push(i);
    } else if (actualCount > maxOccurrenceCount) {
        maxOccurrenceCount = actualCount
        maxOccurrenceNumber = i
    }
}

console.log("Array de 100 numeros enteros del -30 al 30")
console.log(numbers)
console.log("El numero que mas se repite es: ", maxOccurrenceNumber)
console.log("Los numeros que no estan presentes son: ", missingNumbers)

