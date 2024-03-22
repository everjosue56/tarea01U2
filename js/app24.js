// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.


const n  = parseInt(prompt('ingrese una cantidad para N'));

let Numeroarray = [];


for(let i = 0; i < n; i++){
let Nazar = Math.floor(Math.random() * 100) +1;

       Numeroarray.push(Nazar)
}

console.log(Numeroarray);
