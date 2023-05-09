// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.
let number;

do {
    number = prompt("Ingrese un numero: ");
} while (isNaN(number)); //Validar que se ingrese un dato numerico

number = parseFloat(number);

if (number % 2 == 0) {
    console.log("El numero ", number, " es divisible entre 2");
} else {
    console.log("El numero ", number, " NO es divisible entre 2");
}