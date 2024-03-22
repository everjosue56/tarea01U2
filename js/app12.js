//Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
// 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
// para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
// "Vuelva a intentarlo"

const intento1 = prompt('adivina el numero que esta entre 1 y 10');
const intento11 = parseInt(intento1);

const Naleatorio = Math.floor(Math.random() * 10) + 1;

if(Naleatorio === intento11){
    console.log('buen trabajo');
}else{
    console.log('vuelva a intentarlo');
}
