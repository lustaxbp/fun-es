var teclado = require("prompt-sync")();
var nome = "";
var sobrenome = "";
function sair() {
    console.clear();
    console.log("Fim de programa...");
    process.exit(0);
}
function nomeCompleto(nome, sobrenome) {
    console.log("Nome completo \u00E9 ".concat(nome, " ").concat(sobrenome));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
}
function selecao(opcao) {
    nome = teclado("Digite o nome: ");
    sobrenome = teclado("Digite o sobrenome: ");
    switch (opcao) {
        case 0:
            sair();
            break;
        case 1:
            nomeCompleto(nome, sobrenome);
            break;
        default: break;
    }
}
function menu() {
    console.clear();
    console.log("------- teste fun\u00E7\u00E3o + switch ---------");
    console.log("------- selecione op\u00E7\u00E3o ---------");
    console.log();
    console.log("digite a op\u00E7\u00E3o desejada");
    console.log("0 - sair");
    console.log("1 - nome completo");
    var opcao = parseInt(teclado("digie a op\u00E7\u00E3o --->"));
    selecao(opcao);
}
menu();
