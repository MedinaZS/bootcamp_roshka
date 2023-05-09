// Cree una función que tome un número entero positivo y devuelva el siguiente número más grande que se puede formar reorganizando sus dígitos. Por ejemplo:
// 12 -> 21     513 -> 531    2017 - 7210

let nextBig = (number) => {
    let digits = number.toString().split('');
    let bigNumber = digits.sort((a, b) => b - a).join('');
    return (bigNumber == number) ? 'nil' : bigNumber
}

// Test
console.log(nextBig(12)) 
console.log(nextBig(513)) 
console.log(nextBig(2017)) 
console.log(nextBig(9)) 
console.log(nextBig(531)) 
console.log(nextBig(111)) 
