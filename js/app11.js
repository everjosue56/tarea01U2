// Determinar si una palabra empieza con mayúscula o no.

const string = prompt('ingrese un string');

function iniciaMayuscula(str){

const primerCaracter = str.charAt(0);

if (string >= 'A' && string <= 'Z') {
    return "El string comienza con una letra mayuscula.";
} else if (string >= 'a' && string <= 'z') {
    return "El string comienza con una letra minúscula.";
} else {
    return "El string no comienza con una letra.";
}
}

const resultado = iniciaMayuscula(string);
console.log(resultado);