// Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos
// que no distinguen entre mayúsculas y minúsculas que aparecen más de una vez en la cadena de
// entrada. Se puede suponer que la cadena de entrada contiene solo letras (tanto mayúsculas como
// minúsculas) y dígitos numéricos.

let repeticionDeCaracteres = (str) => {
    let count = 0;
    let strCopy = str.toLowerCase()

    for (let i = 0; i < strCopy.length; i++) {
        let letter = strCopy[i];
        strCopy = strCopy.slice(1) // Eliminar la letra actual 
        if (strCopy.includes(letter)) { // Verificar si se repite
            count++
            // Eliminar todas las ocurrencias de la letra actual (Solo nos importa contar si se repite, no cuantas veces)
            strCopy = strCopy.replaceAll(letter, '')
        }
        i-- // Disminuir el contador en 1 (volver a mirar desde el inicio de la cadena)
        
    }
    console.log(str);
    return count;
}

console.log(repeticionDeCaracteres("abcde"))
console.log(repeticionDeCaracteres("aabbcde"))
console.log(repeticionDeCaracteres("aabBcde"))
console.log(repeticionDeCaracteres("indivisibility"))
console.log(repeticionDeCaracteres("Indivisibilities"))
console.log(repeticionDeCaracteres("aA11"))
console.log(repeticionDeCaracteres("ABBA"))

