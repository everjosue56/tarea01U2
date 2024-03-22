// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

const numeroUsuario = parseInt(prompt("Ingrese un numero:"));

if (!isNaN(numeroUsuario)) {
    let contador = 1;

    while (contador <= 12) {
        console.log(numeroUsuario + " x " + contador + " = " + (numeroUsuario * contador));
        contador++;
    }
} else {
    console.log("El valor ingresado no es un numero valido!");
}
