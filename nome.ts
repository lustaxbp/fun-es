const teclado = require (`prompt-sync`)();
let nome: string = ``;
let sobrenome:string = ``;

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);
}

function nomeCompleto (nome:string, sobrenome:string): void{
    console.log(`Nome completo é ${nome} ${sobrenome}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu ();
}

function selecao (opcao:number): void{
    nome = teclado(`Digite o nome: `);
    sobrenome = teclado(`Digite o sobrenome: `);

    switch (opcao){
        case 0 : sair();break;
        case 1 : nomeCompleto(nome, sobrenome);break;
        default: break;
    }
}

function menu():void{
    console.clear();
    console.log(`------- teste função + switch ---------`);
    console.log(`------- selecione opção ---------`);
    console.log();
    console.log(`digite a opção desejada`);
    console.log(`0 - sair`);
    console.log(`1 - nome completo`);
    let opcao: number = parseInt(teclado(`digie a opção --->`));
    selecao(opcao);
}

menu();