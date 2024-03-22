// Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

//A

// const array = [1,2,3,4,5,6];
// let i=0;
// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }


//B

// const array = [1,2,3,4,5,6];
// for(let i = 0; i < array.length; i++){
//      console.log(array[i]);
// }


//C

// const array = [1,2,3,4,5,6];
// array.forEach(i =>  {
//     console.log(i);
// });


//D

//  const array = [1,2,3,4,5,6];
// for(let i = 0; i < array.length; i+=1){
//      array[i] += 1
// }
// console.log(array);


//E 

// const array = [1, 2, 3, 4, 5, 6];
// const copiaArray = array.map(elemento => elemento + 1);
// console.log(copiaArray);


//F 

const array = [ 1,2,3,4,5,6,];

let suma = 0;
let contador = 0;

while(contador < array.length){
     suma += array[contador]
     contador++
}
const promedio = suma / array.length;

console.log(promedio);