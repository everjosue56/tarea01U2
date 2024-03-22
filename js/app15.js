//Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

    const numero = prompt('ingrese un numero');
    const N = parseInt(numero);

    let contador = N;

    while( contador >= 1){
        console.log(contador);
        contador -=1;
    }

   