function saudacaoBomDia (nome: string): void{
    console.log(`bom dia ${nome}!!`);
}

function saudacaoBoaTarde (nome: string): void{
 console.log(`boa tarde ${nome}!!`);
}

function saudacaoBoaNoite (nome: string ): void{
    console.log(`boa noite ${nome}!!`);
}

const teclado = require (`prompt-sync`)();
let nome: string = teclado (`Digite seu nome: `);

console.log(`${nome} qual o periodo é agora ? `);
console.log(`digite`);
console.log(`bd - matutino`);
console.log(`bt - vespertino`);
console.log(`bn - noturno `);

let opcao: string = teclado(`----> `);

switch(opcao){
    case `bd`: saudacaoBomDia (nome); break;
    case `bt`: saudacaoBoaTarde (nome); break;
    case `bn`: saudacaoBoaNoite (nome); break;
}