// Hacer una función que, dada una palabra (String) o frase, diga si la misma es palíndrome o
// no. Una palabra/frase palíndrome es aquella que se lee igual tanto de atrás para adelante,
// como de adelante para atrás. Ejemplos de palíndromes: "MADAM", "RACECAR", "AMORE,
// ROMA", "BORROW OR ROB", "WAS IT A CAR OR A CAT I SAW?".

let isPalindrome = (str) => {
    // Remover caracteres especiales y convertir a minuscula
    let clearString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reversedString = clearString.split('').reverse().join('')

    if (clearString === reversedString) {
        console.log(str, " -> Es un palindromo")
    } else {
        console.log(str, " -> NO es un palindromo")
    }
}

// Test
isPalindrome('MADAM')
isPalindrome('RACECAR')
isPalindrome('AMORE, ROMA')
isPalindrome('BORROW OR ROB')
isPalindrome('WAS IT A CAR OR A CAT I SAW?')
isPalindrome('A man, a plan, a canal: Panama')
isPalindrome('How are you')