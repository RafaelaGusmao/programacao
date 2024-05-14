/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/

let teclado = require (`Prompt-sync`)();
let entrada:number[] = Array (10);
let invertido:number[] = Array (10);
let y: number = 9;

for (let x = 0; x < 10; x++){
    entrada[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
    invertido[y] = entrada[x];
    y--;
}

for (let x = 0; x < 10; x++){
    console.log(`Meu array Inicial ${entrada[x]}, meu array invertido ${invertido[x]}`);
}