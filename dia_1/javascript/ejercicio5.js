// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// también debemos indicarlo.

let number = parseInt(prompt("Ingrese un numero: "));

if (number % 2 == 0){
    console.log("El numero ", number, " es divisible entre 2");
}else{
    console.log("El numero ", number, " NO es divisible entre 2");
}