/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/

console.log();
let teclado = require (`prompt-sync`)();
let numeros = new Array();
let maior = 0;

for (let x = 0; x < 10; x++){
     numeros[x] = parseInt(teclado(`digite o número de índice ${x} do Array: `));
    }

    for (let i = 0; i < 10; i++){ 
 if (numeros[i] > maior) { //  0  >  20
    maior = numeros[i];

  }
}
//console.clear();
console.log(`o maior número é ${maior}`);

