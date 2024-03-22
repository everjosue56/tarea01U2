//5. Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
//las vocales.

const frase = prompt('ingrese una frase');

contadorA = 0;
contadorE = 0;
contadorI = 0;
contadorO = 0;
contadorU = 0;

for( let i = 0; i<frase.length; i++){

    switch (frase[i]) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
};

};

console.log(`la vocal a se repite: ${contadorA} de la frase: ${frase}`);
console.log(`la vocal e se repite: ${contadorE} de la frase: ${frase}`);
console.log(`la vocal i se repite: ${contadorI} de la frase: ${frase}`);
console.log(`la vocal o se repite: ${contadorO} de la frase: ${frase}`);
console.log(`la vocal u se repite: ${contadorU} de la frase: ${frase}`);