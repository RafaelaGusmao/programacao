console.clear();
let teclado = require(`prompt-sync`)();

let meuArray : number [] = new Array();

for (let cont = 0; cont<=9; cont++ ){
    meuArray[cont] = parseInt(teclado(`digite o número: `));

}

for (let x = 0; x<10; x++){
    console.log(meuArray[x]);

}