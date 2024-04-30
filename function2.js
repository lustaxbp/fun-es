function concatenar(palavra1, palavra2) {
    console.log("Concatenando ".concat(palavra1, " e ").concat(palavra2));
    console.log("Resultado ".concat(palavra1 + palavra2));
}
function calcularMedia(n1, n2) {
    var media = (n1 + n2) / 2;
    return media;
}
function tabUada(tabuada) {
    var cont = 0;
    while (cont < 11) {
        console.log("".concat(tabuada, " x ").concat(cont, " = ").concat(tabuada * cont));
        cont++;
    }
}
var teclado = require("prompt-sync")();
var tabuada = teclado("Digite a tabuada desejad: ");
tabUada(tabuada);
var palavra1 = teclado("Digite a palavra um a ser concatenada: ");
var palavra2 = teclado("Digite a palavra dois a ser concatenada: ");
concatenar(palavra1, palavra2);
var n1 = parseInt(teclado("Digite o valor na n1: "));
var n2 = parseInt(teclado("Digite o valor na n2: "));
var resultado = calcularMedia(n1, n2);
console.log("O resultado da m\u00E9dia \u00E9 ".concat(resultado));
