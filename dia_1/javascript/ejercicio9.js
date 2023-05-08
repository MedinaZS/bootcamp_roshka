// Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// mas la contraseña y mostrara un mensaje diciendo “Correcto!”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos, si no acierta
// en los 3 intentos mostrar el mensaje “Fallaste jaja!!”).

let password = "thisissecret"
let attemps = 1;

do {
    inputPassword = prompt(`Ingrese la contraseña (Intento ${attemps}): `);
    if (inputPassword === password) {
        console.log("Correcto!");
        break;
    } else {
        attemps++;
        if (attemps > 3) {
            console.log("Fallaste jaja!!")
        }
    }

} while (attemps <= 3)
