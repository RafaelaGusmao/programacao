/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/
var teclado = require("Prompt-sync")();
var entrada = Array(10);
var invertido = Array(10);
var y = 9;
for (var x = 0; x < 10; x++) {
    entrada[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, " do Array: ")));
    invertido[y] = entrada[x];
    y--;
}
for (var x = 0; x < 10; x++) {
    console.log("Meu array Inicial ".concat(entrada[x], ", meu array invertido ").concat(invertido[x]));
}
