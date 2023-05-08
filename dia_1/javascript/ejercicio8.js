// Lee un número por teclado y comprueba que este numero es mayor o igual que cero, si
// no lo es lo volverá a pedir (do while), después muestra ese número por consola.

let number;

do {
    do {
        number = prompt("Ingrese un numero: ");
    } while (isNaN(number)); //Validar que se ingrese un valor numerico
    number = parseFloat(number);
} while (number <= 0)

console.log("Numero ingresado: ", number);