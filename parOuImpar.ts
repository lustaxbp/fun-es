// Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar 1 se o numero for par e 0 se for impar

// nome : luís otávio Bordin Pereira

function verificaPouI (num: number):number{
    let resto:number = num / 2;
        if (resto==0){resto=1}
        else if(resto==1){resto=0};
        return resto;
        
}   
const teclado=require(`prompt-sync`)();
let num: number = parseInt(teclado(`digite um numero inteiro: `));

verificaPouI(num);