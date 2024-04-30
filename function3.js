/*Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3). */
function volume(valorV) {
    var pi = 3.14;
    var resultado = (4 / 3 * pi * (valorV * valorV * valorV));
    console.log("O resultado \u00E9 ".concat(resultado));
}
var teclado = require("prompt-sync")();
var valorV = parseInt(teclado("Digite o valor de volume: "));
var valorRaio = parseInt(teclado("Digite o valor do Raio: "));
volume(valorV);
