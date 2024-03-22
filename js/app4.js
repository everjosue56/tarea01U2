//4. Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const frase = prompt('ingrese una frase');

contador = 0;

for (let i = 0; i < frase.length; i++){
    if ( frase[i] === 'a') {
        contador++;
    } 

}
console.log('La letra "a" aparece ' + contador + ' veces en la frase: ' + frase);
