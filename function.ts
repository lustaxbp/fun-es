function saudacao ():void{
    console.log(`Olá Mundo !!`);
}


function soma (n1:number,n2:number):void{
    console.log (n1 + n2);
}

const teclado = require (`prompt-sync`)();

let numeroUm: number = parseInt(teclado(`Digite o primeiro número: `));
let numeroDois: number = parseInt(teclado(`Digite o segundo número: `));

saudacao();

soma(numeroUm,numeroDois);
let resultado: number = subtracao(numeroUm, numeroDois);
console.log(`O resultado de ${numeroUm} - ${numeroDois} = ${resultado}`);