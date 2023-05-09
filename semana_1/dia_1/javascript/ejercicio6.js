// Lee un número por teclado que pida el precio de un producto (puede tener
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del
// 10%.

const iva = 0.10; //10%
let price;

do {
    price = prompt("Ingrese el precio de un producto: ");
} while (isNaN(price))

price = parseFloat(price);

let finalPrice = price + (price * iva);

console.log("Precio final ", finalPrice);