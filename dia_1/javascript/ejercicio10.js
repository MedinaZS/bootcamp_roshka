// Crea una aplicación que nos pida un día de la semana y que nos diga si es un dia
// laboral o no (“De lunes a viernes consideramos dias laborales”).

let dias = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];

let dia = "";

do {
    dia = prompt("Ingrese un dia de la semana: ").toUpperCase();
    if (!dias.includes(dia)) console.log("Por favor intente de nuevo con un dia valido.");
} while (!dias.includes(dia));


(dia == "SABADO" || dia == "DOMINGO") ? console.log("No es un dia laboral") : console.log("Es un dia laboral")


