/*7- Faça um programa para calcular n! (Fatorial de
    n), sendo que o valor inteiro de n é fornecido pelo
    usuário. utilize laço de repetição for.*/

    console.clear();
const teclado = require (`prompt-sync`) ();

let y = 1;
let z = 1;
let maximo: number = -1

maximo = maximo + parseInt(teclado(`Digite um numero: `));
for (let x = 0; x <= maximo; x++){
    y = y*z;
    z++
    console.log (y);
}