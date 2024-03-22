//23. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

const numeros = [];

const Nazar = Math.floor(Math.random() * 100) +1;

for(let i = 0; i < 20; i++){
       numeros.push(Nazar)
}

console.log(numeros);

