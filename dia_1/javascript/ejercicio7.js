// Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3.

console.log("Numeros divisibles entre 2 y 3");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i);
    }
}