/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/
console.clear();
var teclado = require("prompt-sync")();
var vetor = Array(10);
var crescente = 0;
for (var x = 0; x < 10; x++) {
    vetor[x] = parseInt(teclado("Digite os n\u00FAmeros ".concat(x, ": ")));
    for (var y = 0; y <= 10; y++) {
        if (vetor[x] < vetor[y]) {
            crescente = vetor[x];
            vetor[x] = vetor[y];
            vetor[y] = crescente;
        }
    }
}
for (var x = 1; x <= 10; x++) {
    console.log("Em ordem crescente ".concat(vetor[x]));
}
