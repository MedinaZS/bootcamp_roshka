// 3. Escribir una función en JavaScript que reciba un id y un string y ponga como innerHTML del elemento con el id referenciado el valor del string
let stringInnerHTML = (id, str) => {
    document.getElementById(id).innerHTML = str
}
// Test
stringInnerHTML("email", "hola@gmail.com")


// 4. Escribir una función en JavaScript que reciba un id, y ponga en el innerHTML del elemento con el id referenciado un número aleatorio entre 1 y 100
let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let randomNumberInnerHTML = (id) => {
    let randomNumber = randomInRange(1, 100);
    document.getElementById(id).innerHTML = randomNumber;
}
// Test
randomNumberInnerHTML("number")