const prompt = require('prompt-sync')();

function pedirnumero() {
    let numero;
    while (true) {
        console.log("Por favor digita un número:");
        let input = prompt();
        numero = parseInt(input);

        if (!isNaN(numero)) {
            break;
        } else {
            console.log("Error: solo puedes ingresar un número, intenta de nuevo.");
        }
    }
    return numero;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let numero = pedirnumero();  
console.log("El factorial del número " + numero + " es: " + factorial(numero));
