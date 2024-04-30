function saudacaoBomDia(nome) {
    console.log("bom dia ".concat(nome, "!!"));
}
function saudacaoBoaTarde(nome) {
    console.log("boa tarde ".concat(nome, "!!"));
}
function saudacaoBoaNoite(nome) {
    console.log("boa noite ".concat(nome, "!!"));
}
var teclado = require("prompt-sync")();
var nome = teclado("Digite seu nome: ");
console.log("".concat(nome, " qual o periodo \u00E9 agora ? "));
console.log("digite");
console.log("bd - matutino");
console.log("bt - vespertino");
console.log("bn - noturno ");
var opcao = teclado("----> ");
switch (opcao) {
    case "bd":
        saudacaoBomDia(nome);
        break;
    case "bt":
        saudacaoBoaTarde(nome);
        break;
    case "bn":
        saudacaoBoaNoite(nome);
        break;
}
