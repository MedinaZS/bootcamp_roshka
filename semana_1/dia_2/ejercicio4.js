// Dada una cadena de caracteres (String) de longitud desconocida que tiene solamente dígitos,
// crear un array de N elementos (donde N es el tamaño de la cadena) que tenga cada uno de los
// valores numéricos de los dígitos.

let getNumericValue = (str) => {
    let numbers = new Array(str.length)
    for (let i = 0; i < str.length; i++) {
        numbers[i] = parseInt(str[i])
    }
    console.log("String: ", str)
    console.log("Array of numeric value", numbers)
}

// Test
getNumericValue('0123456789')
getNumericValue('785934857')
getNumericValue('7654')