// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.



function palabrasQueEmpiezanConVocal(arreglo) {
    
    const palabrasFiltradas = arreglo.filter(palabra => { 
        const primeraLetra = palabra.toLowerCase()[0];
        return ['a', 'e', 'i', 'o', 'u'].includes(primeraLetra);
    });
        return palabrasFiltradas;  
}

const entradaUsuario = prompt("Ingrese las palabras separadas por comas:"); 
const palabras = entradaUsuario.split(',');
const palabrasFiltradas = palabrasQueEmpiezanConVocal(palabras);
console.log("Palabras que empiezan con vocal:", palabrasFiltradas);
