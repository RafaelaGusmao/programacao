console.clear();
var teclado = require("prompt-sync")();
var meuArray = new Array();
for (var cont = 0; cont <= 9; cont++) {
    meuArray[cont] = parseInt(teclado("digite o n\u00FAmero: "));
}
for (var x = 0; x < 10; x++) {
    console.log(meuArray[x]);
}
