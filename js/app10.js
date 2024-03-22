//10. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
//determine si el triángulo es válido o no.

const angulo1 = prompt('introduzca el aungulo interno a');
const angulo11 = parseFloat(angulo1);
const angulo2 = prompt('introduzca el aungulo interno b');
const angulo22 = parseFloat(angulo2);
const angulo3 = prompt('introduzca el aungulo interno c');
const angulo33 = parseFloat(angulo3);

const sumaTotal = angulo11 + angulo22 + angulo33;

if(sumaTotal === 180){
    console.log('el triangolo es valido');
}else {
    console.log('el triangulo no es valido');
}
