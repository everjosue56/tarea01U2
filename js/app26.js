// 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

const string = prompt('ingrese algo ')
const array = [];
const valor = string.split(',')
console.log(valor);

for(let i = 0; i <= valor.length; i++){
      
      array.push(valor[i])

}
console.log(valor);