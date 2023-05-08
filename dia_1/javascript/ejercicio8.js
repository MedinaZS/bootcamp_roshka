// Lee un número por teclado y comprueba que este numero es mayor o igual que cero, si
// no lo es lo volverá a pedir (do while), después muestra ese número por consola.

let number = 0;

do {
    number = parseInt(prompt("Ingrese un numero: "));
} while (number <= 0)

console.log("Numero ingresado: ", number);