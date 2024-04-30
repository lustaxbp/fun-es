function concatenar (palavra1: string, palavra2:string): void{
    console.log (`Concatenando ${palavra1} e ${palavra2}`);
    console.log (`Resultado ${palavra1+palavra2}`);
}

function calcularMedia (n1: number, n2:number):number{
    let media : number = (n1+n2)/2;
    return media 
}

function tabUada (tabuada:number):void {
   let cont: number = 0;
    
     while(cont < 11){
       console.log(`${tabuada} x ${cont} = ${tabuada*cont}`);
         cont++;
    }   
}

const teclado = require (`prompt-sync`)();

let tabuada:number=teclado(`Digite a tabuada desejad: `)
tabUada(tabuada)
let palavra1: string = teclado(`Digite a palavra um a ser concatenada: `);
let palavra2: string = teclado(`Digite a palavra dois a ser concatenada: `);

concatenar(palavra1,palavra2)

let n1: number = parseInt(teclado(`Digite o valor na n1: `));
let n2: number = parseInt(teclado(`Digite o valor na n2: `));

let resultado: number = calcularMedia (n1,n2);
console.log(`O resultado da média é ${resultado}`);
