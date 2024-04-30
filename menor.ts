//crie uma função que receba 3 numeros como parametro e retorne o MENOR dentre eles. 

// nome : Luís Otávio Bordin Pereira

function maisOumenos (n1:number, n2:number, n3:number): number{ 
    let menorN: number=0;
    if(n1<n2 && n1<n3){menorN=n1}
    else if(n2<n1 && n2<n3){menorN=n2}
    else if(n3<n1 && n3<n2){menorN=n3}
    return menorN;
}

const teclado=require(`prompt-sync`)();

let num1: number = parseInt(teclado(`digite o primeiro numero: `));
let num2: number = parseInt(teclado(`digite o segundo numero: `));
let num3: number = parseInt(teclado(`digite o terceiro numero: `));

console.log(`O menor número é ${maisOumenos(num1,num2,num3)}`);