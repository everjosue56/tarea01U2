//9. Crear un programa que determine si un string introducido por un usuario inicia con un
//número o con una letra

const string = prompt('ingrese un string');

function determinarInicio(str) {
    
    const primerCaracter = str.charAt(0);

    if (!isNaN(primerCaracter)) {
        return "El string comienza con un numero.";
    } else {
        return "El string comienza con una letra.";
    }
}

const resultado = determinarInicio(string);
console.log(resultado);