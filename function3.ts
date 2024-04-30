/*Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3). */

function volume (valorV: number):void{
    const pi: number = 3.14;
    let resultado: number = (4/3*pi*(valorV*valorV*valorV));
    console.log(`O resultado é ${resultado}`)
}

const teclado=require(`prompt-sync`)();
let valorV: number = parseInt(teclado("Digite o valor de volume: "));
 let valorRaio : number = parseInt(teclado(`Digite o valor do Raio: `));
volume (valorV)