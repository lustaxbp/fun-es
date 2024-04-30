let inOut: number = 0;
do{
    const teclado = require(`prompt-sync`)();

 console.log(`Qual operação deseja? Digite: `);
 console.log(`+ --> Adição`);
 console.log(`- --> Subtração`);
 console.log(`* --> Multiplicação`);
 console.log(`/ --> Divisão`);
 console.log(`s --> Sair`);

 let opcao: string = teclado(`Digite a opção desejada: `);


  let numeroUm:number= 0; parseInt(teclado(`Digite o 1º número: `))
  let numeroDois:number= 0; parseInt(teclado(`Digite o 2º número: `))
  let resultado:number = 0;
  if (opcao == `+`){
    resultado = numeroUm + numeroDois ;
    console.log ( `O valor da soma de ${numeroUm} com ${numeroDois}`);
    console.log (`é ${resultado}`);
  }
  else if (opcao == `-`){;
    resultado = numeroUm - numeroDois;
   console.log(`O valor da subtração de ${numeroUm} com ${numeroDois}`)
   console.log(`é ${resultado}`)
  }
  else if (opcao == `*`){
 resultado = numeroUm*numeroDois
 console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois}`)
 console.log(`é ${resultado}`)
  }
  else if (opcao == `/`){
  
 resultado = numeroUm/numeroDois
 console.log(`O valor da divisão de ${numeroUm} com ${numeroDois}`)
 console.log(`é ${resultado}`)
 }
 else {
    console.log(`! Algo deu errado !`);
 }
 console.clear();
 console.log(`Para continuar digite`);
 console.log(`0 --> Sair`);
 console.log(`1 --> Continuar`);
 inOut = parseInt(teclado(`Digite a opção: `));

}while (inOut != 0);

console.log(`Fim de programa ...`);
