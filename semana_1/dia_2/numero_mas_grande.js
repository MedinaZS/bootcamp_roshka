// Cree una función que tome un número entero positivo y devuelva el siguiente número más grande que se puede formar reorganizando sus dígitos. Por ejemplo:
// 12 -> 21     513 -> 531    2017 - 7210


let permutate = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
    return arr;
}


let nextBig = (number) => {
    let bigNumber = null

    console.log("Numero: ", number);
    // Obtener los numeros por separado
    let digits = number.toString().split('');

    // Si son de dos digitos 
    if (digits.length == 1) {
        return bigNumber;
    }
    if (digits.length == 2) {
        if (digits[0] < digits[1]) {
            // Permutar los numeros
            digits = permutate(digits, 0, 1)
            bigNumber = digits.join('');
        }
    } else {
        // Recorrer de atras para adelante (Index Start es desde que posicion empieza a permutar )
        let findBigNumber = (indexStart) => {
            digits = number.toString().split('');

            for (let i = indexStart; i > 0; i--) {
                digits = permutate(digits, i, i - 1)
                // Si lo permutado de ahora es mas grande que el numero ingresado salir
                if (digits.join('') > number) {
                    bigNumber = digits.join('');
                    break;
                }
            }

            // Si no se encontro un big number permutar desde el ultimo -1 hasta que index start sea 1 (no se puede permutar con 1 solo elemento)
            if (bigNumber == null && indexStart != 1) {
                // console.log("No bignumber", digits)
                findBigNumber(indexStart - 1)
            }
            // else {

            //     // Volver a permutar los dos ultimos
            //     digits = permutate(digits, digits.length - 1, digits.length - 2)

            //     if (digits.join('') > number && digits.join('') < bigNumber) {
            //         bigNumber = digits.join('');
            //     }
            // }
        }

        // Primera llamada a la funcion
        findBigNumber(digits.length - 1)

    }
    return bigNumber
}

//Test
console.log(nextBig(12)) //21
console.log(nextBig(32)) //null
console.log(nextBig(513)) //531
console.log(nextBig(2017)) //2071 
console.log(nextBig(9)) // null
console.log(nextBig(531)) // null
console.log(nextBig(111)) // null
console.log(nextBig(334)) // null
console.log(nextBig(82045)) //82054 
console.log(nextBig(82450)) //82540 
console.log(nextBig(8475)) //8547 
console.log(nextBig(2011)) //2101 
console.log(nextBig(2001)) //2010
console.log(nextBig(20100)) //21000
console.log(nextBig(3150)) //3501 y da 3510 

console.log(nextBig(5130)) //3501 y da 510 
console.log(nextBig(42510)) //45012 y da 45201 

