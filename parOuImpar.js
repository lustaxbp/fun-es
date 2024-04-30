// Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar 1 se o numero for par e 0 se for impar
// nome : luís otávio Bordin Pereira
function verificaPouI(num) {
    var resto = num / 2;
    if (resto == 0) {
        resto = 1;
    }
    else if (resto == 1) {
        resto = 0;
    }
    ;
    return resto;
}
var teclado = require("prompt-sync")();
var num = parseInt(teclado("digite um numero inteiro: "));
verificaPouI(num);
