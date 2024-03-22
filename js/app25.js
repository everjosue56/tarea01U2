// 25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.


const color = prompt('ingrese un color');

const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

if(array.includes(color)){
  console.log('acerto con el color');
}else{
    console.log('no acerto con el color');
}


